import { ComponentType } from "react";
import { Navigate, useParams } from "react-router-dom";

import PdfContainer from "@components/PdfContainer";

import CamaraPublication from "./publications/Camara";

const allowedPdfs = [
  "artventure",
  "radione",
  "camara-full",
  "radi-full",
  "hyewonlee-cv",
];

const allowedProjectPdfs = ["artventure", "radione"];

const publicationComponents: Record<string, ComponentType> = {
  camara: CamaraPublication,
};

export const DynamicPdfPage = () => {
  const { pdfName } = useParams<{ pdfName: string }>();

  if (!pdfName || !allowedPdfs.includes(pdfName)) {
    return <Navigate to="/" replace />;
  }

  return <PdfContainer link={`/pdf/${pdfName}.pdf`} />;
};

export const DynamicProjectPage = () => {
  const { projectName } = useParams<{ projectName: string }>();

  if (!projectName || !allowedProjectPdfs.includes(projectName)) {
    return <Navigate to="/" replace />;
  }

  return <PdfContainer link={`/pdf/${projectName}.pdf`} />;
};

export const DynamicPublicationPage = () => {
  const { publicationName } = useParams<{ publicationName: string }>();

  if (!publicationName) {
    return <Navigate to="/" replace />;
  }

  const PublicationComponent =
    publicationComponents[publicationName.toLowerCase()];

  if (!PublicationComponent) {
    return <Navigate to="/" replace />;
  }

  return <PublicationComponent />;
};
