import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import PdfContainer from "@components/PdfContainer";
import Main from "@pages/Main";
import About from "@pages/About";
import Projects from "@pages/Projects";
import Pub from "@pages/Pub";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "pub/",
        element: <Pub />,
        children: [
          {
            path: "vivid",
            element: <>hihi vivid</>,
          },
          {
            path: "camara",
            element: <>hihi camara</>,
          },
        ],
      },
    ],
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
