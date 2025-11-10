import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";
import {
  DynamicPdfPage,
  DynamicProjectPage,
  DynamicPublicationPage,
} from "./pages/DynamicPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "projects/:projectName",
        element: <DynamicProjectPage />,
      },
      {
        path: "project/:projectName",
        element: <DynamicProjectPage />,
      },
      {
        path: "pubs/:publicationName",
        element: <DynamicPublicationPage />,
      },
      {
        path: "publication/:publicationName",
        element: <DynamicPublicationPage />,
      },
    ],
  },
  {
    path: "/pdf/:pdfName",
    element: <DynamicPdfPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
