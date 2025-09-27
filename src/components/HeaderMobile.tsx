import urls from "@assets/strings/urls";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "utils/styles";

const HeaderMobile = () => {
  const [menu, setMenu] = useState<boolean>(false);
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
    <HeaderContainer menu={menu}>
      <div
        style={{
          width: "100%",
          height: "72px",
          boxSizing: "border-box",
          padding: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <HeaderNameWrapper
          onClick={() => {
            if (menu) setMenu(false);
            scrollToSection("main");
          }}
        >
          <HeaderElWrapper style={{ fontSize: "20px" }} bold={true}>
            Hyewon Lee, 이혜원
          </HeaderElWrapper>
          {/* <ProfileImage src="/img/profile.png" alt="Hyewon Lee" /> */}
          {/* <EmailText>hyewon0809[at]kaist.ac.kr</EmailText> */}
        </HeaderNameWrapper>
        {menu ? (
          <X onClick={() => setMenu(false)} size={20} color={colors.darkgray} />
        ) : (
          <Menu onClick={() => setMenu(true)} size={20} color={colors.gray} />
        )}
      </div>
      `
      {menu && (
        <HeaderColWrapper>
          <HeaderElWrapper
            bold={
              location.pathname === "/" && location.hash === "#publications"
            }
            onClick={() => {
              setMenu(false);
              scrollToSection("publications");
            }}
          >
            Publications
          </HeaderElWrapper>
          <HeaderElWrapper
            bold={location.pathname === "/projects"}
            onClick={() => {
              setMenu(false);
              navigate("/projects");
            }}
          >
            Projects
          </HeaderElWrapper>
        </HeaderColWrapper>
      )}
      {menu && (
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
      )}
      {menu && (
        <div
          style={{
            boxSizing: "border-box",
            padding: "32px",
            fontSize: "11px",
            color: colors.gray,
          }}
        >{`© 2025 Hyewon Lee\nLast Updated at Apr 2025`}</div>
      )}
    </HeaderContainer>
  );
};
export default HeaderMobile;

const HeaderContainer = styled.div<{ menu: boolean }>`
  width: 100%;
  height: ${(props) => (props.menu ? "100%" : "72px")};

  box-sizing: border-box;

  flex: 0 0 auto;

  border-bottom: 1px solid ${colors.gray};
  backdrop-filter: blur(5px);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  z-index: 100;
  transition: all 0.5s;

  @media (width > 1024px) {
    display: none;
  }
`;

const HeaderColWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  box-sizing: border-box;
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;

  margin-bottom: 20px;
`;

const HeaderNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
`;

const HeaderElWrapper = styled.div<{ bold?: boolean }>`
  color: ${(props) => (props.bold ? colors.primary : colors.black)};

  font-size: ${(props) => (props.bold ? "16px" : "14px")};
  font-weight: ${(props) => (props.bold ? 450 : 400)};

  transition: all 0.2s;

  &:hover {
    text-decoration: underline;
  }

  cursor: pointer;
`;
