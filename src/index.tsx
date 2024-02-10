import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import PdfContainer from "@components/PdfContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/CV.pdf",
    element: <PdfContainer link="Hyewon_Lee_CV.pdf" />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
