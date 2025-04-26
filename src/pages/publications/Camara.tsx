import PageLayout from "@components/PageLayout";
import SmallTag from "@components/SmallTag";
import Tag from "@components/Tag";
import { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { colors } from "utils/styles";

const Camara = () => {
  return (
    <PageLayout
      style={{
        padding: "32px",
        gap: "28px",
        alignItems: "center",
        marginTop: "20px",
        marginBottom: "100px",
      }}
    >
      <ContentContainer>
        <div>CHI EA 2025</div>
        <div
          style={{ fontWeight: 450, fontSize: "28px", textAlign: "center" }}
        >{`CamARa: Exploring and Creating Camera Movements \nwith Spatial Reference in Augmented Reality`}</div>
        <AuthorList>
          <Author
            img="/img/profile.png"
            name="Hyewon Lee"
            link="https://www.hyewon.me/"
            school="KAIST"
          />
          <Author
            img="https://media.licdn.com/dms/image/v2/D5603AQFSVvZ6RqcqLQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730177940152?e=1750896000&v=beta&t=YJeeeNtcLi2A2kCWIYmlij8nyp4940yl2LSSfgAfqW4"
            name="Christopher Bannon"
            link="https://www.linkedin.com/in/cbannon/"
            school="KAIST"
          />
          <Author
            img="https://make.kaist.ac.kr/images/people/andrea_bianchi.jpg"
            name="Andrea Bianchi"
            link="https://make.kaist.ac.kr/andrea"
            school="KAIST"
          />
        </AuthorList>
        <AuthorList>
          <SmallTag
            onClick={() =>
              window.open(
                "https://dl.acm.org/doi/10.1145/3706599.3721180",
                "_blank"
              )
            }
          >
            Paper
          </SmallTag>
        </AuthorList>

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
      </ContentContainer>
    </PageLayout>
  );
};
export default Camara;

const ContentContainer = styled.div`
  width: 800px;
  @media (width <= 1024px) {
    width: 90%;
  }
  @media (width <= 768px) {
    width: 96%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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
          fontSize: "18px",
          marginTop: "5px",
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
      <div>{school}</div>
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
