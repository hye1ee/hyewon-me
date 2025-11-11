import { ComponentType } from "react";
import { Navigate, useParams } from "react-router-dom";

import PdfContainer from "@components/PdfContainer";

import Camara from "./publications/Camara";
import Radi from "./publications/Radi";
import Bunny from "./projects/Bunny";

const allowedPdfs = [
  "artventure",
  "radione",
  "camara-full",
  "radi-full",
  "hyewonlee-cv",
];

const projectPdfSlugs = ["artventure", "radione"];

const projectComponents: Record<string, ComponentType> = {
  bunny: Bunny,
};

const publicationComponents: Record<string, ComponentType> = {
  camara: Camara,
  radi: Radi,
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

  if (!projectName) {
    return <Navigate to="/" replace />;
  }

  const normalized = projectName.toLowerCase();

  const ProjectComponent = projectComponents[normalized];
  if (ProjectComponent) {
    return <ProjectComponent />;
  }

  if (projectPdfSlugs.includes(normalized)) {
    return <PdfContainer link={`/pdf/${normalized}.pdf`} />;
  }

  return <Navigate to="/" replace />;
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
