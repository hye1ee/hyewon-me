import updates from "@assets/strings/updates";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "utils/styles";
import { Github, GraduationCap, Linkedin, Mail } from "lucide-react";
import ProfilePhoto from "@components/ProfilePhoto";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: updates.linkedin, Icon: Linkedin },
  { label: "GitHub", href: updates.github, Icon: Github },
  { label: "Google Scholar", href: updates.googlescholar, Icon: GraduationCap },
  { label: "Email", href: updates.email, Icon: Mail },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

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
        <HeaderName>Hyewon Lee</HeaderName>
        {isHome && <HeaderProfilePhoto />}
      </HeaderNameWrapper>
      <HeaderColWrapper>
        <HeaderElWrapper
          bold={location.pathname === "/" && location.hash === "#about"}
          onClick={() => scrollToSection("about")}
        >
          About
        </HeaderElWrapper>
        <HeaderElWrapper
          bold={
            (location.pathname === "/" && location.hash === "#publications") ||
            location.pathname.includes("/pubs/") ||
            location.pathname.includes("/publication/")
          }
          onClick={() => scrollToSection("publications")}
        >
          Publications
        </HeaderElWrapper>
        <HeaderElWrapper
          bold={
            location.pathname.startsWith("/projects") ||
            location.pathname.includes("/project/")
          }
          onClick={() => navigate("/projects")}
        >
          Projects
        </HeaderElWrapper>
        <HeaderElWrapper
          bold={false}
          onClick={() => navigate("/pdf/hyewonlee-cv")}
        >
          CV
        </HeaderElWrapper>
      </HeaderColWrapper>
      <HeaderFooterWrapper>
        <HeaderRowWrapper>
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <IconLink
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
            >
              <Icon size={18} strokeWidth={1.6} />
            </IconLink>
          ))}
        </HeaderRowWrapper>
        <div
          style={{
            fontSize: "12px",
            color: colors.darkgray,
            textAlign: "center",
          }}
        >{updates.copyright}</div>
      </HeaderFooterWrapper>
    </HeaderContainer>
  );
};
export default Header;

const HeaderContainer = styled.div`
  /* Center header + content (960px) as one block on wide screens */
  width: 320px;
  margin-left: max(60px, calc((100vw - 1280px) / 2));

  @media (width <= 1280px) {
    width: 280px;
    margin-right: 30px;
    margin-left: max(60px, calc((100vw - 1150px) / 2));
  }
  @media (width >= 1440px) {
    width: 320px;
    margin-right: 80px;
    margin-left: max(60px, calc((100vw - 1360px) / 2));
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
  height: fit-content;
  margin: 24px 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;

const HeaderRowWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
`;

const HeaderFooterWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin-bottom: 24px;
`;

const HeaderName = styled.div`
  position: relative;
  z-index: 1;
  font-size: 28px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${colors.black};
`;

const HeaderNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
`;

// Sits a little below the name and bleeds into the side padding
const HeaderProfilePhoto = styled(ProfilePhoto)`
  max-height: min(44vh, calc(100vh - 360px));
  max-width: calc(100% + 24px);
  margin: 2px -12px 0;
`;

const HeaderElWrapper = styled.div<{ bold?: boolean }>`
  flex: 0 0 auto;
  align-self: flex-start;
  color: ${colors.black};

  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: ${(props) => (props.bold ? "underline" : "none")};
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;

  transition: color 0.2s;

  &:hover {
    color: ${colors.darkgray};
  }

  cursor: pointer;
`;

const IconLink = styled.a`
  display: flex;
  color: ${colors.darkgray};
  transition: color 0.2s;

  &:hover {
    color: ${colors.black};
  }
`;
