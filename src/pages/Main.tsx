import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import PageLayout from "@components/PageLayout";

import LinkedinIcon from "@assets/linkedinIcon.png";
import GithubIcon from "@assets/githubIcon.png";

const AnimateText = ["", "Research", "Design", "Develop", "Build"];

const animation = {
  initial: {
    y: "-30px",
    opacity: 0,
  },
  animate: {
    y: "0%",
    opacity: 1,
  },
};

const Main = () => {
  const [animateText, setAnimateText] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimateText((prev) => (prev + 1) % 5);
    }, 2000);
    setTimeout(() => clearInterval(timer), 8500);
  }, []);

  return (
    <PageLayout main={true} id="main-page" style={{ paddingBottom: "90px" }}>
      <MainWrapper>
        <MainContentRight>
          <div style={{ fontFamily: "Hello-Ketta", fontSize: "70px" }}>
            {"Hello, My name is"}
          </div>
          <div style={{ fontSize: "96px" }}>{"HYEWON\nLEE"}</div>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <MainIcon
              onClick={() => window.open("https://www.linkedin.com/in/hye1ee/")}
              src={LinkedinIcon}
            />
            <MainIcon
              onClick={() => window.open("https://github.com/hye1ee")}
              src={GithubIcon}
            />
          </div>
        </MainContentRight>
        <MainContentRightBottom>
          <div style={{ fontSize: "23px" }}>
            {"I'm a "}
            <span style={{ fontFamily: "Gilroy-Medium" }}>
              {"Frontend Developer "}
            </span>
            {
              "& Designer\nwho loves human computer interactions. \n\nMajoring computer science, industrial design at "
            }
            <span
              onClick={() =>
                window.open("https://www.kaist.ac.kr/en/html/kaist/01.html")
              }
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              {"KAIST 🇰🇷"}
            </span>
            {"\nCurrently based in NYC 🗽, studying at New York University."}
          </div>
        </MainContentRightBottom>
        <MainContentLeftBottom style={{ fontSize: "96px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "fit-content",
              alignItems: "flex-end",
            }}
          >
            {"I  "}
            <MainMotionContainer
              key={animateText}
              variants={animation}
              initial={"initial"}
              animate={"animate"}
              transition={{ type: "spring" }}
            >
              {AnimateText[animateText]}
            </MainMotionContainer>
          </div>
          {"CREATIVE\nINTERACTIONS"}
        </MainContentLeftBottom>
      </MainWrapper>
    </PageLayout>
  );
};
export default Main;

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const MainContentRight = styled.div`
  position: absolute;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: flex-start;

  text-align: right;
`;

const MainContentRightBottom = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: flex-start;

  text-align: right;
`;

const MainContentLeftBottom = styled.div`
  position: absolute;
  left: 0;
  bottom: -20px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;

  text-align: left;
`;

const MainIcon = styled.img`
  width: 42px;
  height: 42px;
  cursor: pointer;

  &:hover {
    opacity: 50%;
  }
  transition: all 0.3s;
`;

const MainMotionContainer = styled(motion.div)`
  font-family: "Hello-Ketta";
  font-size: 140px;

  position: relative;
`;
