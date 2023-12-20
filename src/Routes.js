import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/upload-image",
        element: <UploadPage />,
      },
    ],
  },
]);

export default router;
