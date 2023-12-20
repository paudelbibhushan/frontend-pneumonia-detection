

// import React from "react";
// import { Link } from "react-router-dom";
// import HomeHeader from "../assets/image.svg";

// function HomePage() {
//   return (
//     <div className="container text-center">
//       <div className="row">
//         <div className="col d-flex flex-column justify-content-center align-items-center">
//           <h1 className="mt-5 text-uppercase">Pneumonia Detection</h1>
//           <p className="mt-3">
//             This is a Pneumonia Detection application that determines whether an
//             X-ray image indicates pneumonia or not.
//           </p>
//           <div className="mt-5">
//             <Link to="/upload-image">
//               <button type="button" className="btn btn-success mr-3">
//                 Proceed to Upload Image
//               </button>
//             </Link>
//             <Link to="/learn-more">
//               <button type="button" className="btn btn-info">
//                 Learn More
//               </button>
//             </Link>
//           </div>
//         </div>
//         <div className="col">
//           <img src={HomeHeader} alt="Home Header" className="img-fluid" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;








import React from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../assets/image.svg";

function HomePage() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <h1 className="mt-5 text-uppercase">Pneumonia Detection</h1>
          <p className="mt-3">
            This is a Pneumonia Detection application that determines whether an
            X-ray image indicates pneumonia or not.
          </p>
          <div className="mt-5">
            <Link to="/upload-image">
              <button type="button" className="btn btn-success mr-3">
                Proceed to Upload Image
              </button>
            </Link>
          <a href="https://en.wikipedia.org/wiki/Pneumonia" target="_blank" rel="noopener noreferrer" style={{ padding: '10px' }}  >
              <button type="button" className="btn btn-info">
                Learn More
              </button>
            </a>
          
          </div>
        </div>
        <div className="col">
          <img src={HomeHeader} alt="Home Header" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

