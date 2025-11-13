import ProjectTemplate, {
  ProjectContentBlock,
} from "@components/ProjectTemplate";

const blocks: ProjectContentBlock[] = [
  {
    type: "text",
    content:
      "TutoSupport is a social video tutorial system designed to enhance engagement and creativity in hands-on learning tasks such as knitting, cooking, or crafting. While tutorial videos are a popular way to learn creative skills, traditional commenting systems make it difficult for learners to receive personalized feedback or emotional encouragement that matches their individual context, level, and environment. Hands-on tasks are inherently social and rely on visual cues, tacit knowledge, and creative variations that cannot be fully captured through text comments. Learners often struggle to spot their mistakes or assess whether they are following instructions correctly, which discourages completion and limits creative exploration.",
  },
  {
    type: "image",
    src: "/projects/tutosupport-1.png",
  },
  {
    type: "text",
    content:
      "To address these challenges, TutoSupport introduces a social system that embeds interactive features directly within video tutorials. The design encourages learners to find inspiration, share progress, and receive contextualized feedback through four key components. (1) Hall of Fame showcases inspiring finished works at the start of each tutorial, helping users set creative goals. (2) Common Mistakes List aggregates frequently discussed issues with pinned, visual comments, enabling learners to recognize and overcome errors more efficiently. (3) Feedback Request Pop-ups allow users to seek help at specific moments in the tutorial, lowering the barrier to asking questions. Finally, (4) Real-time Claps Confetti provides instant encouragement and a sense of shared progress during the learning process. Together, these features transform video tutorials into an interactive social space where learners can connect, learn, and grow creatively.",
  },
  {
    type: "image",
    src: "/projects/tutosupport-2.png",
  },
  {
    type: "image",
    src: "/projects/tutosupport-3.png",
  },
  {
    type: "text",
    content:
      "An in-lab user study with three beginner crochet learners evaluated the usability and engagement of TutoSupport, revealing that the system effectively fostered motivation and a sense of togetherness through its gallery and visual comment features, with a SUS score of 75.0, while also highlighting the need for improved moderation and filtering.",
  },
  {
    type: "text",
    content:
      "The system was built with a React-based frontend and Firebase backend, and is deployed at https://tutosupport.vercel.app/. This research project was conducted as part of <CS473 Intro to Social Computing> and was selected for the People's Choice Award.",
  },
];

const TutoSupportProject = () => {
  return (
    <ProjectTemplate
      sectionTitle="Project"
      id="tutosupport"
      title="TutoSupport — Social Video Tutorial System"
      projectPeriod="Sep 2024 - Dec 2024"
      role="Interaction & Interface Design, Frontend Development"
      members={["Hyewon Lee", "Hyun A Kim", "Sheikh Shafayat"]}
      blocks={blocks}
    />
  );
};

export default TutoSupportProject;
