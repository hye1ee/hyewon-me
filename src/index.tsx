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
    path: "/resume",
    element: <PdfContainer link="Hyewon_Lee_CV.pdf" />,
  },
  {
    path: "/projects/radione",
    element: <PdfContainer link="/projects/radione.pdf" />,
  },
  {
    path: "/projects/artventure",
    element: <PdfContainer link="/projects/artventure.pdf" />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
