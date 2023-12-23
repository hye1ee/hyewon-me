import styled from "styled-components";
import PageLayout from "@components/PageLayout";

import LinkedinIcon from "@assets/linkedinIcon.png";

const Main = () => {
  return (
    <PageLayout main={true} id="main-page" style={{ paddingBottom: "100px" }}>
      <MainWrapper>
        {" "}
        Main
        <MainContentRight>
          <div style={{ fontFamily: "Hello-Ketta", fontSize: "70px" }}>
            {"Hello, My name is"}
          </div>
          <div style={{ fontSize: "96px" }}>{"HYEWON\nLEE"}</div>
        </MainContentRight>
        <MainContentRightBottom>
          <div style={{ fontSize: "25px" }}>
            {
              "I’m a Frontend Developer and a designer\nwho loves human computer interactions. \n\nMajoring computer science, industrial design at KAIST 🇰🇷.\nCurrently based in NYC 🗽, studying at New York University."
            }
          </div>
        </MainContentRightBottom>
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
  bottom: 10px;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: flex-start;

  text-align: right;
`;
