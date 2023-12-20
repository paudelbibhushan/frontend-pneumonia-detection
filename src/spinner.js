import React from "react";

export default function Spinner() {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center"
        style={{ height: "100vh", alignItems: "center" }}
      >
        <p>Loading</p>

        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}
