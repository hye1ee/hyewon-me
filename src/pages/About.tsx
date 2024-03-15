import ContentLayout from "@components/ContentLayout";
import ProfileImg from "@assets/profile.png";
import styled from "styled-components";

const description = `I research, design, and develop creative interactions, with a particular focus on computer graphics.
My passion lies in product building for users, leveraging emerging computer technologies to enhance usability and creativity.
My projects aim at introducing novel interactions and experiences.`;

const About = () => {
  return (
    <ContentLayout id="about-page" title="ABOUT" gap={40}>
      <AboutDescription>{description}</AboutDescription>
      <AboutContentWrapper>
        <AboutContentCol>
          <AboutImg>
            <img
              style={{ width: "100%", objectFit: "cover" }}
              alt="profile"
              src={ProfileImg}
            />
          </AboutImg>
        </AboutContentCol>
        <AboutContentCol style={{ flex: 1, marginBottom: "40px" }}>
          <AboutSection
            title="INTERESTS"
            tags={["SaaS", "Human Computer Interaction", "Computer Graphics"]}
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
          <AboutButton
            onClick={() => window.open(window.location.origin + "/resume")}
          >
            🖱️ Click here to see more information
          </AboutButton>
        </AboutContentCol>
      </AboutContentWrapper>
    </ContentLayout>
  );
};
export default About;

const AboutImg = styled.div`
  width: 28vw;
  box-sizing: border-box;
  padding: 0 50px 0 0;
`;

const AboutDescription = styled.div`
  font-size: 18px;
  line-height: 1.5;
`;
const AboutContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const AboutContentCol = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 40px;
`;

const AboutButton = styled.div`
  width: fit-content;
  height: fit-content;
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid darkgray;
  color: darkgray;
  font-weight: bold;

  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.4;
  }
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
