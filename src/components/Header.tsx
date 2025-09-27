import urls from "@assets/strings/urls";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "utils/styles";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <HeaderContainer>
      <HeaderNameWrapper onClick={() => scrollToSection("main")}>
        <HeaderElWrapper style={{ fontSize: "20px" }} bold={true}>
          Hyewon Lee, 이혜원
        </HeaderElWrapper>
        <ProfileImage src="/img/profile.png" alt="Hyewon Lee" />
        <SpeechBubble>
          Seeking a PhD position for 2026 🎓
          <br />
          Heading to Busan 🇰🇷 for UIST 2025
        </SpeechBubble>
      </HeaderNameWrapper>
      <HeaderColWrapper>
        <HeaderElWrapper
          bold={location.pathname === "/" && location.hash === "#about"}
          onClick={() => scrollToSection("about")}
        >
          About
        </HeaderElWrapper>
        <HeaderElWrapper
          bold={location.pathname === "/" && location.hash === "#publications"}
          onClick={() => scrollToSection("publications")}
        >
          Publications
        </HeaderElWrapper>
        <HeaderElWrapper
          bold={location.pathname === "/projects"}
          onClick={() => navigate("/projects")}
        >
          Projects
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
        style={{ fontSize: "11px", color: colors.darkgray }}
      >{`© 2025 Hyewon Lee\nLast Updated at Sep 2025`}</div>
    </HeaderContainer>
  );
};
export default Header;

const HeaderContainer = styled.div`
  width: 340px;
  margin-right: 60px;

  @media (width <= 1280px) {
    width: 300px;
    margin-right: 40px;
  }
  @media (width >= 1440px) {
    width: 380px;
    margin-right: 80px;
  }
  height: 100%;

  box-sizing: border-box;
  padding: 32px;

  flex: 0 0 auto;

  /* background-color: ${colors.lightgray}; */
  /* border-right: 1px solid ${colors.gray}; */
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

const HeaderNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const SpeechBubble = styled.div`
  position: relative;
  align-self: center;
  background-color: white;
  border: 1px solid black;
  padding: 8px 12px;
  margin-top: 4px;
  font-size: 12px;
  font-weight: 400;
  color: black;
  text-align: center;
  max-width: 200px;
  word-wrap: break-word;

  /* Triangle pointer */
  &::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid black;
  }

  &::after {
    content: "";
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid white;
  }
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
