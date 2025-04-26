import PageLayout from "@components/PageLayout";
import SmallTag from "@components/SmallTag";
import Tag from "@components/Tag";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { colors } from "utils/styles";

const Pub = () => {
  return (
    <PageLayout style={{ padding: "32px", gap: "28px" }}>
      <div
        style={{ fontWeight: 450, fontSize: "20px", textAlign: "center" }}
      >{`Publications`}</div>
      <PubItem
        image="/publications/thumb-camara.jpg"
        title="CamARa: Exploring and Creating Camera Movements with Spatial Reference in Augmented Reality"
        titleLink="https://hyewon.me/pub/camara/"
        authors={["Hyewon Lee", "Christopher Bannon", "Andrea Bianchi"]}
        description=""
        links={{
          Webpage: "https://hyewon.me/pub/camara",
          Paper: "https://dl.acm.org/doi/10.1145/3706599.3721180",
        }}
        conference="CHI EA 2025"
      />
      <PubItem
        image="/publications/thumb-vivid.jpg"
        title="VIVID: Human-AI Collaborative Authoring of Vicarious Dialogues from Lecture Videos"
        titleLink="https://vivid.kixlab.org/"
        authors={["Seulgi Choi", "Hyewon Lee", "Yoonjoo Lee", "Juho Kim"]}
        description=""
        links={{
          Webpage: "https://vivid.kixlab.org/",
          Paper: "https://dl.acm.org/doi/10.1145/3613904.3642867",
        }}
        conference="CHI 2024"
      />

      <Outlet />
    </PageLayout>
  );
};
export default Pub;

interface PubItemProps {
  image: string;
  title: string;
  titleLink?: string;
  authors: string[];
  description: string;
  links: { Webpage?: string; Paper?: string; Github?: string };
  conference?: string;
}

const PubItem = ({
  image,
  title,
  titleLink,
  authors,
  description,
  links,
  conference,
}: PubItemProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <ThumbnailImage>
        <img
          src={image}
          alt={image}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
      </ThumbnailImage>
      <div
        style={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <Tag>{conference}</Tag>

        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            fontWeight: hover ? 500 : 450,
            fontSize: "20px",
            cursor: "pointer",
            textDecoration: hover ? "underline" : "none",
            textDecorationStyle: hover ? "dotted" : "solid",
            transition: "all 0.3s",
            color: "black",
            marginLeft: "8px",
          }}
          onClick={() => window.open(titleLink, "_blank")}
        >
          {title}
        </div>

        <div style={{ marginLeft: "8px", color: colors.darkgray }}>
          {authors.map((author, index) => (
            <span key={index}>
              {author === "Hyewon Lee" ? (
                <div
                  style={{
                    fontWeight: 500,
                    color: colors.black,
                    display: "inline-block",
                  }}
                >
                  {author}
                </div>
              ) : (
                author
              )}
              {index < authors.length - 1 && ", "}
            </span>
          ))}
        </div>

        <div
          className="hide-on-mobile"
          style={{ fontSize: "14px", marginLeft: "8px" }}
        >
          {description}
        </div>

        {/* 링크 버튼들 */}
        <div
          style={{
            gap: "8px",
            flex: 1,
            display: "flex",
            alignItems: "flex-end",
            marginTop: "8px",
          }}
        >
          {Object.entries(links).map((link, idx) => (
            <SmallTag key={idx} onClick={() => window.open(link[1], "_blank")}>
              {link[0]}
            </SmallTag>
          ))}
        </div>
      </div>
    </div>
  );
};

const ThumbnailImage = styled.div`
  width: 200px;
  margin-right: 20px;
  border-radius: 8px;
  border: 0.5px solid ${colors.gray};

  @media (width <= 768px) {
    display: none;
  }
`;
