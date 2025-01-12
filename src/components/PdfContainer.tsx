import styled from "styled-components";

const PdfContainer = ({ link }: { link: string }) => {
  return (
    <PdfContainerWrapper>
      <embed src={link} width="100%" height="100%" />
    </PdfContainerWrapper>
  );
};
export default PdfContainer;

const PdfContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  overflow: hidden;
`;
