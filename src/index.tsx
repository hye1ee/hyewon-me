import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
  Navigate,
} from "react-router-dom";
import App from "./App";
import MainPage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";
import PdfContainer from "@components/PdfContainer";

// List of allowed PDF files (without .pdf extension)
const allowedPdfs = ["artventure", "radione", "camara-full", "radi-full"];

// Dynamic PDF route component with validation
const DynamicPdfRoute = () => {
  const { pdfName } = useParams<{ pdfName: string }>();

  if (!pdfName || !allowedPdfs.includes(pdfName)) {
    return <Navigate to="/" replace />;
  }
  return <PdfContainer link={`/pdf/${pdfName}.pdf`} />;
};

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
    ],
  },
  {
    path: "/pdf/:pdfName",
    element: <DynamicPdfRoute />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
