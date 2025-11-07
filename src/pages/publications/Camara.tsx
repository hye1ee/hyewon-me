import PageContainer from "@components/PageContainer";
import Section from "@components/Section";
import SmallTag from "@components/SmallTag";
import { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { getLocalUrl } from "utils";
import { colors } from "utils/styles";

const linkInfo = [
  {
    icon: "/icon/paper.svg",
    link: "https://dl.acm.org/doi/10.1145/3706599.3721180",
    text: "ACM DL",
  },
  {
    icon: "/icon/pdf.svg",
    link: getLocalUrl("/pdf/camara-full.pdf"),
    text: "Preprint",
  },
];

const authorInfo = [
  {
    img: "/img/profile.png",
    name: "Hyewon Lee",
    link: "https://www.hyewon.me/",
    school: "KAIST",
  },

  {
    img: "https://media.licdn.com/dms/image/v2/D5603AQFSVvZ6RqcqLQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730177940178?e=1764201600&v=beta&t=yIfwLNSow84x8TZOz-CFyx7-O5ZR5H6N4xkH4SQvnSs",
    name: "Christopher Bannon",
    link: "https://www.linkedin.com/in/cbannon/",
    school: "KAIST",
  },

  {
    img: "https://make.kaist.ac.kr/images/people/andrea_bianchi.jpg",
    name: "Andrea Bianchi",
    link: "https://make.kaist.ac.kr/andrea",
    school: "KAIST",
  },
];

const Camara = () => {
  return (
    <PageContainer>
      <Section
        sectionTitle="CHI Extended Abstracts 2025"
        id="chi-ea-2025"
        style={{ alignItems: "center" }}
      >
        <PaperInfoWrapper>
          <PaperTitle>{`CamARa: Exploring and Creating Camera Movements \nwith Spatial Reference in Augmented Reality`}</PaperTitle>

          <AuthorList>
            {linkInfo.map((link) => (
              <SmallTag
                key={link.text}
                icon={link.icon}
                onClick={() => window.open(link.link, "_blank")}
              >
                {link.text}
              </SmallTag>
            ))}
          </AuthorList>
          <AuthorList>
            {authorInfo.map((author) => (
              <Author
                key={author.name}
                img={author.img}
                name={author.name}
                link={author.link}
                school={author.school}
              />
            ))}
          </AuthorList>
        </PaperInfoWrapper>
        <YoutubeContainer>
          <ReactPlayer
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            url="https://youtu.be/-1f3vTEJsO0"
          />
        </YoutubeContainer>
        <Content title="Abstract">
          <div style={{ lineHeight: 1.4 }}>
            Camera layout is a critical aspect of digital production, shaping
            the narrative and emotional tone of animation, CGI, and
            previsualization. However, managing camera movements in 3D space is
            a known challenge due to the complexity of controlling six degrees
            of freedom (DoF). Virtual camera systems aim to replicate the
            functionality of physical cameras, allowing users to manipulate a
            virtual camera within a digital scene. However, these systems often
            struggle with environmental constraints and can lead to spatial
            disorientation. To address these limitations, we present CamARa, an
            augmented camera layout system that leverages augmented reality (AR)
            for intuitive, spatially aware interaction. CamARa allows users to
            explore and create camera movements with a mobile device, utilizing
            spatial reference in the environment. It visualizes movement
            trajectories in AR, facilitating collaboration and iterative design.
            This work highlights the potential of AR as a versatile alternative
            to traditional and VR-based camera layout tools, bridging the gap
            between physical and virtual spaces to support digital
            cinematographic workflows.
          </div>
        </Content>
        <Content title="Bibtex">
          <div
            style={{
              border: `1px solid ${colors.gray}`,
              borderRadius: "8px",
              padding: "16px",
              position: "relative",
              background: colors.lightgray,
              color: colors.black,
              fontFamily: "monospace",
              fontSize: "14px",
              whiteSpace: "pre-wrap",
            }}
          >
            {`@inproceedings{10.1145/3706599.3721180,
author = {Lee, Hyewon and Bannon, Christopher and Bianchi, Andrea},
title = {CamARa: Exploring and Creating Camera Movements with Spatial Reference in Augmented Reality},
year = {2025},
isbn = {9798400713958},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3706599.3721180},
doi = {10.1145/3706599.3721180},
booktitle = {Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems},
articleno = {703},
numpages = {5},
keywords = {camera layout, augmented reality, virtual camera, spatial reference},
location = {
},
series = {CHI EA '25}
}`}
          </div>
        </Content>
      </Section>
    </PageContainer>
  );
};
export default Camara;

const PaperInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PaperTitle = styled.div`
  font-weight: 550;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  white-space: pre-wrap;
`;

const YoutubeContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;

  @media (width <= 768px) {
    width: 100%;
    padding-top: 56.25%;
  }
`;

const AuthorList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;

const Content = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div
        style={{
          width: "100%",
          borderBottom: `1px solid ${colors.gray}`,
          marginBottom: "8px",
        }}
      />
      <div style={{ fontSize: "24px", fontWeight: 500 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {children}
      </div>
    </div>
  );
};

const Author = ({
  img,
  name,
  link,
  school,
}: {
  img: string;
  name: string;
  link?: string;
  school: string;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <AuthorItem>
      <AuthorProfile src={img} />
      <div
        onMouseEnter={() => {
          if (link) setHover(true);
        }}
        onMouseLeave={() => {
          if (link) setHover(false);
        }}
        style={{
          fontWeight: 500,
          marginTop: "6px",
          whiteSpace: "wrap",
          textAlign: "center",
          cursor: "pointer",

          textDecoration: hover ? "underline" : "none",
          textDecorationStyle: hover ? "dotted" : "solid",
        }}
        onClick={() => {
          if (link) window.open(link, "_blank");
        }}
      >
        {name}
      </div>
      <div
        style={{
          color: colors.darkgray,
          textAlign: "center",
          whiteSpace: "pre-wrap",
        }}
      >
        {school}
      </div>
    </AuthorItem>
  );
};

const AuthorProfile = styled.img`
  width: 88px;
  height: 88px;
  object-fit: cover;
  border-radius: 16px;

  @media (width <= 768px) {
    width: 50px;
    height: 50px;
  }
`;
const AuthorItem = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (width <= 768px) {
    width: 80px;
  }
`;
