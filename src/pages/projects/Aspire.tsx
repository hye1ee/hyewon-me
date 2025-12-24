import ProjectTemplate, {
  ProjectContentBlock,
} from "@components/ProjectTemplate";

const blocks: ProjectContentBlock[] = [
  {
    type: "text",
    content:
      "Aspire is a mobile application designed as a family investment platform where parents and teens learn about investing together through real-world experiences. The interface is centered around the key visual concept of the family fire, inspired by the metaphor of a lantern, which visualizes shared investment activity as a growing flame that represents collective effort, balance, and long-term growth. Through an intuitive shared space, families can set goals, analyze investments, and engage in guided discussions, making complex financial concepts more approachable for teens while supporting meaningful parent–teen communication. By combining emotional support, collaborative decision-making, and warm, approachable visuals, Aspire reframes investing as a shared learning journey that strengthens both financial literacy and family relationships.",
  },
  {
    type: "image",
    src: "/projects/aspire-1.png",
  },
  {
    type: "image",
    src: "/projects/aspire-2.png",
  },
  {
    type: "image",
    src: "/projects/aspire-3.png",
  },
  {
    type: "image",
    src: "/projects/aspire-4.png",
  },
  {
    type: "image",
    src: "/projects/aspire-5.png",
  },
  {
    type: "image",
    src: "/projects/aspire-6.png",
  },
  {
    type: "image",
    src: "/projects/aspire-7.png",
  },
  {
    type: "image",
    src: "/projects/aspire-8.png",
  },
  {
    type: "image",
    src: "/projects/aspire-9.png",
  },
  {
    type: "image",
    src: "/projects/aspire-10.png",
  },
  {
    type: "text",
    content:
      "This project was submitted to the iF Design Award 2026 and selected as a finalist. The UX design was a collaborative team effort, and I led the UI design, including 2D/3D asset design and motion graphics.",
  },
];

const AspireProject = () => {
  return (
    <ProjectTemplate
      sectionTitle="Project"
      id="aspire"
      title="Aspire — Family Investment Mobile Application"
      projectPeriod="Sep 2024 - Dec 2024"
      role="2D & 3D Asset Design, Motion Graphics, UI/UX Design"
      members={[
        "Hyewon Lee",
        "Ihchae Ryu",
        "Ja Yeong Im",
        "Jiyoon Lee",
        "Sejoon Oh",
        "Ysa San Juan",
      ]}
      blocks={blocks}
    />
  );
};

export default AspireProject;
