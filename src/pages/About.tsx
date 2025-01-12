import PageLayout from "@components/PageLayout";
import styled from "styled-components";
import { colors } from "utils/styles";

const About = () => {
  return (
    <PageLayout style={{ padding: "32px", gap: "28px" }}>
      <div
        style={{ fontWeight: 450, fontSize: "20px", textAlign: "center" }}
      >{`Hello, I'm Hyewon Lee`}</div>
      <img
        style={{ width: "400px", objectFit: "cover" }}
        alt="profile"
        src="/img/profile.png"
      />
      <AboutDescription>
        {`I'm an undergraduate student at the `}
        <div
          style={{
            color: colors.primary_highlight,
            fontWeight: 450,
            display: "inline-block",
          }}
        >{`Korea Advanced Institute of Science and Technology, `}</div>
        <div
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            display: "inline-block",
          }}
          onClick={() => window.open("https://kaist.ac.kr/en/")}
        >{`KAIST,`}</div>
        {`\ndouble majoring in the School of Computing and Industrial Design.\n`}
        {`\nMy research interests lie in\n`}

        <div
          style={{
            color: colors.primary_highlight,
            fontWeight: 450,
          }}
        >{`crafting novel interactions to expand the boundaries of creativity across multimodal mediums.\n`}</div>

        {`\nOutside of HCI research, I'm also passionate about\n`}
        {`frontend development, computer graphics, and 3D design/animation.\n`}
        {/* <div style={{ display: "flex", gap: "6px" }}>
          <Tag># Frontend Development</Tag>
          <Tag># Computer Graphics</Tag>
          <Tag># 3D Design / Animation</Tag>
        </div> */}

        {`\nI'm currently advised by `}
        <div
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            display: "inline-block",
          }}
          onClick={() => window.open("https://make.kaist.ac.kr/andrea")}
        >{`Prof. Andrea Bianchi at Makelab`}</div>
        {`\nand previously worked with `}
        <div
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            display: "inline-block",
          }}
          onClick={() => window.open("https://juhokim.com/")}
        >{`Prof. Juho Kim at KIXLAB.\n`}</div>
        <div>
          {`\nI enjoy sharing insights and thoughts about my interests!\n`}
          {`Feel free to reach out if you'd like to connect.\n`}
        </div>
        <div
          style={{ color: colors.darkgray }}
        >{`\n*I'm a PhD applicant this year for 2026 entry.\n`}</div>
      </AboutDescription>
      <AboutContentWrapper>
        <AboutContentCol>
          <AboutImg></AboutImg>
        </AboutContentCol>
        {/* <AboutContentCol style={{ flex: 1, marginBottom: "40px" }}>
          <AboutSection
            title="INTERESTS"
            tags={["Human Computer Interaction", "Computer Graphics", "Art"]}
          />
          <AboutSection
            title="EDUCATION"
            contents={[
              [
                "Korea Advanced Institute of Science & Technology",
                "Majoring in computer science and industrial design",
              ],
              ["New York University", "Minoring in integrated design & media"],
            ]}
          />
          <AboutSection
            title="EXPERIENCE"
            contents={[
              [
                "Software Engineer Intern, Sketchsoft",
                "Emerging start-up building 3D sketching tool, Feather.",
              ],
              [
                "HCI Researcher Intern, KIXLAB",
                "Human computer interaction research group at KAIST with advisor prof. Juho Kim.",
              ],
              [
                "Software Engineer, SPARCS",
                "KAIST programmer association serving web-based services for university students.",
              ],
            ]}
          />
        </AboutContentCol> */}
      </AboutContentWrapper>
    </PageLayout>
  );
};
export default About;

const AboutImg = styled.div`
  width: 28vw;
  box-sizing: border-box;
  padding: 0 50px 0 0;
`;

const AboutDescription = styled.div`
  display: inline-block;
  font-size: 15px;
  line-height: 1.4;
  font-weight: 350;
`;
const AboutContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutContentCol = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 40px;
`;

interface AboutSectionProps {
  title: string;
  tags?: string[];
  contents?: string[][];
}

const AboutSection = (props: AboutSectionProps) => {
  return (
    <AboutSectionWrapper>
      <div style={{ fontSize: "18px", fontWeight: "bold" }}>{props.title}</div>
      <AboutSectionDivider />
      {props.tags && (
        <AboutSectionTagWrapper>
          {props.tags.map((tag) => (
            <AboutSectionTag>{tag}</AboutSectionTag>
          ))}
        </AboutSectionTagWrapper>
      )}
      {props.contents && (
        <AboutSectionContentWrapper>
          {props.contents.map((content) => (
            <AboutSectionContent>
              <div style={{ fontSize: "20px" }}>{content[0]}</div>
              <div style={{ fontSize: "15px", color: "darkgray" }}>
                {content[1]}
              </div>
            </AboutSectionContent>
          ))}
        </AboutSectionContentWrapper>
      )}
    </AboutSectionWrapper>
  );
};
const AboutSectionWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;

const AboutSectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 5px 0px 10px 0px;
`;

const AboutSectionTagWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const AboutSectionContentWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AboutSectionTag = styled.div`
  width: fit-content;
  height: fit-content;
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid black;
  font-weight: bold;
`;

const AboutSectionContent = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
`;
