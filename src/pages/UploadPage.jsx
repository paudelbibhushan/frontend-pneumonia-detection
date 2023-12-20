import React, { useState } from "react";
import axios from "axios";
import Spinner from "../spinner";
import heroImage from "../assets/image.jpg";
import { useEffect } from "react";

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(null);
  const [showUpload, setShowUpload] = useState(true);
  const [accuracy, setAccuracy] = useState(null);

  const [xRay, setXray] = useState(null);
  const formData = new FormData();

  useEffect(() => {
    if (xRay !== null && xRay) {
      formData.append("image", selectedFile);
      console.log("xRay", xRay);
      axios
        .post("http://localhost:5000/detect", formData)
        .then((response) => {
          setLoading(false);
          console.log(response.data);
          setResult(response.data?.data);
          setAccuracy(response.data?.accuracy);
          setShowUpload(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log("error");
          if (error.response) setError(error.response.data);
        });
    }
  }, [xRay, formData]);

  const handleFileChange = (event) => {
    setIsSelected(true);
    setImagePreview(null);
    setResult("");
    const file = event.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleDetectClick = () => {
    if (!selectedFile) {
      setIsSelected(false);
      return;
    }
    setLoading(true);
    if (!selectedFile) {
      console.error("No file selected.");
      return;
    }

    formData.append("image", selectedFile);
    axios
      .post("http://localhost:5000/predict", formData)
      .then((response) => {
        setLoading(false);
        console.log(response.data.data);

        if (response?.data?.data) {
          setXray(true);
        } else {
          setXray(false);
          setResult("Please upload X ray Image");
          setShowUpload(true);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log("error");
        if (error.response) setError(error.response.data);
      });
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {result.length ? (
            result === "Pneumonia Detected" ? (
              <>
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <h1 className="text-center mt-2 mb-5 text-uppercase text-primary">
                    Result of Pneumonia Detection
                  </h1>
                  <img src={heroImage} alt="Hero" style={{ width: "50rem" }} />
                </div>
                {imagePreview && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      margin: "0 200px",
                      gap: "2rem",
                    }}
                    className="text-primary"
                  >
                    <div>
                      <h5>Selected Xray:</h5>
                      <img
                        src={imagePreview}
                        alt="Preview"
                        style={{ width: "200px", height: "200px" }}
                        className="img-thumbnail"
                      />
                    </div>
                    <h3 className="mt-5">
                      Result:
                      <p>{result}</p>
                      <p className="">
                        Prediction Probability:
                        <p>{accuracy !== null ? accuracy : "No accuracy"}</p>
                        {/* <p> Please visit the Doctor as soon as possible </p> */}
                      </p>
                    </h3>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <h1 className="text-center mt-2 mb-5 text-uppercase text-success">
                    Result of Pneumonia Detection
                  </h1>
                  <img src={heroImage} alt="Hero" style={{ width: "50rem" }} />
                </div>
                {imagePreview && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      margin: "0 200px",
                    }}
                    className="text-success"
                  >
                    <div>
                      <h5>Selected Xray:</h5>
                      <img
                        src={imagePreview}
                        alt="Preview"
                        style={{ width: "200px", height: "200px" }}
                        className="img-thumbnail"
                      />
                    </div>
                    <h3 className="mt-5">
                      Result:
                      <p>{result.data ? result.data : result}</p>
                      <p>
                        Prediction Probability:
                        <p>
                          {accuracy !== null
                            ? 1 - accuracy
                            : "Accuracy not provided"}
                        </p>
                      </p>
                    </h3>
                  </div>
                )}
              </>
            )
          ) : (
            <>
              <h1 className="text-center mt-2 text-uppercase text-success">
                Upload Image for Pneumonia Detection
              </h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={heroImage} alt="Hero" style={{ width: "50rem" }} />
              </div>
              <div className="image-upload">
                <div className="d-flex flex-column align-items-center mt-5">
                  {showUpload && (
                    <div>
                      <input type="file" onChange={handleFileChange} />
                    </div>
                  )}
                  {showUpload && (
                    <button
                      type="button"
                      className="btn btn-success mt-3"
                      onClick={handleDetectClick}
                    >
                      SUBMIT
                    </button>
                  )}
                  {!showUpload && <h5> </h5>}
                  {selectedFile && !isSelected && (
                    <h5>Please select an Image</h5>
                  )}
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{ width: "200px", height: "200px" }}
                      className="img-thumbnail"
                    />
                  )}
                  {error ? <p>{error}</p> : <></>}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default UploadPage;
