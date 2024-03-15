import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import LottieHyewonResearch from "@assets/hyewon_research.json";
import LottieHyewonDesign from "@assets/hyewon_design.json";
import LottieHyewonDevelop from "@assets/hyewon_develop.json";

import { motion } from "framer-motion";

import PageLayout from "@components/PageLayout";

import LinkedinIcon from "@assets/linkedinIcon.png";
import GithubIcon from "@assets/githubIcon.png";
import CvIcon from "@assets/cvIcon.png";

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

const Main = ({
  animateEvent,
  setAnimateEvent,
}: {
  animateEvent: boolean;
  setAnimateEvent: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [animateText, setAnimateText] = useState<number>(0);
  const lottieResearchRef = useRef<LottieRefCurrentProps>(null);
  const lottieDesignRef = useRef<LottieRefCurrentProps>(null);
  const lottieDevelopRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    setAnimateEvent(true);
  }, []);

  useEffect(() => {
    if (
      animateEvent &&
      lottieResearchRef.current &&
      lottieDesignRef.current &&
      lottieDevelopRef.current
    ) {
      if (animateText === 1) lottieResearchRef.current.play();
      else if (animateText === 2) lottieDesignRef.current.play();
      else if (animateText === 3) lottieDevelopRef.current.play();
      else if (animateText === 0) {
        lottieResearchRef.current.stop();
        lottieDevelopRef.current.stop();
        lottieDesignRef.current.stop();
      }
    }
  }, [animateText]);

  useEffect(() => {
    if (animateEvent) {
      setAnimateText(0);
      const timer = setInterval(() => {
        setAnimateText((prev) => (prev + 1) % 5);
      }, 2000);
      setTimeout(() => {
        setAnimateEvent(false);
        clearInterval(timer);
      }, 8500);
    }
  }, [animateEvent]);

  return (
    <PageLayout main={true} id="main-page" style={{ paddingBottom: "90px" }}>
      <MainWrapper>
        <Lottie
          lottieRef={lottieResearchRef}
          style={{ width: "25%", position: "absolute", left: "0px" }}
          autoplay={false}
          loop={false}
          animationData={LottieHyewonResearch}
        />
        <Lottie
          lottieRef={lottieDesignRef}
          style={{
            width: "23%",
            position: "absolute",
            left: "42%",
          }}
          autoplay={false}
          loop={false}
          animationData={LottieHyewonDesign}
        />
        <Lottie
          lottieRef={lottieDevelopRef}
          style={{
            width: "21%",
            position: "absolute",
            left: "22%",
            top: "14%",
          }}
          autoplay={false}
          loop={false}
          animationData={LottieHyewonDevelop}
        />
        <MainContentRight>
          <div style={{ fontFamily: "Hello-Ketta", fontSize: "70px" }}>
            {"Hello, My name is"}
          </div>
          <MainTitle>{"HYEWON\nLEE"}</MainTitle>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <MainIcon
              onClick={() => window.open("https://www.linkedin.com/in/hye1ee/")}
              src={LinkedinIcon}
            />
            <MainIcon
              onClick={() => window.open("https://github.com/hye1ee")}
              src={GithubIcon}
            />

            <MainIcon
              onClick={() => window.open(window.location.origin + "/resume")}
              src={CvIcon}
            />
          </div>
        </MainContentRight>
        <MainContentRightBottom>
          <div style={{ fontSize: "18px", lineHeight: 1.5 }}>
            {"I'm a "}
            <span style={{ fontFamily: "Gilroy-Medium" }}>
              {"Software Engineer & Interaction Designer"}
            </span>
            {
              "\nwho loves human computer interactions. \nMajoring computer science and industrial design at "
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
        <MainContentLeftBottom style={{ fontSize: "94px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "fit-content",
              alignItems: "flex-end",
            }}
          >
            <MainTitle>{"I  "}</MainTitle>
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
          <MainTitle> {"CREATIVE\nINTERACTIONS"}</MainTitle>
        </MainContentLeftBottom>
      </MainWrapper>
    </PageLayout>
  );
};
export default Main;

const MainWrapper = styled.div`
  width: 1280px;
  max-width: 90%;
  height: 100%;
  position: relative;
`;

const MainContentRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: flex-start;

  text-align: right;
`;

const MainContentRightBottom = styled.div`
  max-width: 50%;
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
  max-width: 50%;
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

const MainTitle = styled.div`
  font-size: 94px;
  @media screen and (max-width: 1440px) {
    font-size: 80px;
  }
  @media screen and (max-width: 960px) {
    font-size: 68px;
  }
`;

const MainMotionContainer = styled(motion.div)`
  font-family: "Hello-Ketta";
  font-size: 140px;

  position: relative;
`;
