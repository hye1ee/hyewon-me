import styled from "styled-components";

const Footer = () => {
  return <FooterContainer>© by Hyewon Lee. www.hyewon.me</FooterContainer>;
};
export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 400px;

  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  box-sizing: border-box;
  padding-bottom: 100px;

  font-size: 13px;
  color: gray;
`;
