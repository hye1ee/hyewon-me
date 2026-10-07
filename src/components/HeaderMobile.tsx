import updates from "@assets/strings/updates";
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
          height: "60px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "transparent",
          background: "transparent",
          padding: "0 32px",
        }}
      >
        <HeaderNameWrapper
          onClick={() => {
            if (menu) setMenu(false);
            scrollToSection("main");
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            Hyewon Lee
          </div>
          {/* <ProfileImage src="/img/profile.png" alt="Hyewon Lee" /> */}
          {/* <EmailText>hyewon0809[at]kaist.ac.kr</EmailText> */}
        </HeaderNameWrapper>
        {menu ? (
          <X onClick={() => setMenu(false)} size={20} color={colors.darkgray} />
        ) : (
          <Menu onClick={() => setMenu(true)} size={20} color={colors.gray} />
        )}
      </div>
      {menu && (
        <HeaderColWrapper>
          <HeaderElWrapper
            bold={location.pathname === "/" && location.hash === "#about"}
            onClick={() => {
              setMenu(false);
              scrollToSection("about");
            }}
          >
            About
          </HeaderElWrapper>
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
            bold={location.pathname.startsWith("/project")}
            onClick={() => {
              setMenu(false);
              navigate("/projects");
            }}
          >
            Projects
          </HeaderElWrapper>
          <HeaderElWrapper
            bold={false}
            onClick={() => {
              setMenu(false);
              navigate("/pdf/hyewonlee-cv");
            }}
          >
            CV
          </HeaderElWrapper>
        </HeaderColWrapper>
      )}
      {menu && (
        <HeaderColWrapper>
          <HeaderFooterElWrapper
            onClick={() => {
              window.open(updates.linkedin);
            }}
          >
            Linkedin
          </HeaderFooterElWrapper>
          <HeaderFooterElWrapper
            onClick={() => {
              window.open(updates.github);
            }}
          >
            Github
          </HeaderFooterElWrapper>
          <HeaderFooterElWrapper
            onClick={() => {
              window.open(updates.googlescholar);
            }}
          >
            Google Scholar
          </HeaderFooterElWrapper>
          <HeaderFooterElWrapper
            onClick={() => {
              window.open(updates.email);
            }}
          >
            Email
          </HeaderFooterElWrapper>
        </HeaderColWrapper>
      )}
      {menu && (
        <HeaderColWrapper>
          {" "}
          <div
            style={{
              fontSize: "12px",
              color: colors.darkgray,
              textAlign: "left",
            }}
          >{updates.copyright}</div>
        </HeaderColWrapper>
      )}
    </HeaderContainer>
  );
};
export default HeaderMobile;

const HeaderContainer = styled.div<{ menu: boolean }>`
  width: 100%;
  height: ${(props) => (props.menu ? "100%" : "60px")};

  box-sizing: border-box;

  flex: 0 0 auto;

  /* position: sticky;
  top: 0; */

  /* border-bottom: 1px solid ${colors.gray}; */

  background-color: transparent !important;
  background: transparent !important;

  display: flex;
  flex-direction: column;
  align-items: center;
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
  padding: 42px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: flex-start;
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
  color: ${colors.black};

  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: ${(props) => (props.bold ? "underline" : "none")};
  text-underline-offset: 4px;

  &:hover {
    color: ${colors.darkgray};
  }

  cursor: pointer;
`;

const HeaderFooterElWrapper = styled.div<{ bold?: boolean }>`
  flex: 0 0 auto;
  align-self: flex-start;
  color: ${colors.black};
  font-size: 14px;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${colors.darkgray};
  }
`;
