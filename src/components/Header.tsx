import urls from "@assets/strings/urls";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "utils/styles";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <HeaderContainer>
      <HeaderElWrapper
        style={{ fontSize: "20px" }}
        bold={true}
        onClick={() => navigate("/")}
      >
        Hyewon Lee
      </HeaderElWrapper>
      <HeaderColWrapper>
        <HeaderElWrapper
          bold={location.pathname === "/about"}
          onClick={() => navigate("/about")}
        >
          About
        </HeaderElWrapper>
        <HeaderElWrapper
          bold={location.pathname === "/projects"}
          onClick={() => navigate("/projects")}
        >
          Projects
        </HeaderElWrapper>
        <HeaderElWrapper
          bold={location.pathname === "/pub"}
          onClick={() => navigate("/pub")}
        >
          Publications
        </HeaderElWrapper>
      </HeaderColWrapper>
      <HeaderColWrapper>
        <HeaderElWrapper
          onClick={() => {
            window.open(urls.cv);
          }}
        >
          CV ⬈
        </HeaderElWrapper>
        <HeaderElWrapper
          onClick={() => {
            window.open(urls.linkedin);
          }}
        >
          Linkedin ⬈
        </HeaderElWrapper>
        <HeaderElWrapper
          onClick={() => {
            window.open(urls.github);
          }}
        >
          Github ⬈
        </HeaderElWrapper>
        <HeaderElWrapper
          onClick={() => {
            window.open(urls.googlescholar);
          }}
        >
          Google Scholar ⬈
        </HeaderElWrapper>
      </HeaderColWrapper>
      <div
        style={{ fontSize: "11px", color: colors.gray }}
      >{`© 2025 Hyewon Lee\nLast Updated at Apr 2025`}</div>
    </HeaderContainer>
  );
};
export default Header;

const HeaderContainer = styled.div`
  width: 260px;

  @media (width <= 1280px) {
    width: 200px;
  }
  @media (width >= 1440px) {
    width: 300px;
  }
  height: 100%;

  box-sizing: border-box;
  padding: 32px;

  flex: 0 0 auto;

  /* background-color: ${colors.lightgray}; */
  border-right: 1px solid ${colors.gray};
  backdrop-filter: blur(5px);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  z-index: 100;

  @media (width <= 1024px) {
    display: none;
  }
`;

const HeaderColWrapper = styled.div`
  width: fit-content;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;

const HeaderElWrapper = styled.div<{ bold?: boolean }>`
  align-self: flex-start;
  color: ${(props) => (props.bold ? colors.primary : colors.black)};

  font-size: ${(props) => (props.bold ? "16px" : "14px")};
  font-weight: ${(props) => (props.bold ? 450 : 400)};

  transition: all 0.2s;

  &:hover {
    text-decoration: underline;
  }

  cursor: pointer;
`;
