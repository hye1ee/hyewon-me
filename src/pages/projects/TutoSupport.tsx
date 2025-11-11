import ProjectTemplate, {
  ProjectContentBlock,
} from "@components/ProjectTemplate";

const blocks: ProjectContentBlock[] = [
  {
    type: "text",
    content:
      "TutoSupport augments peer tutoring sessions with AI-generated prompts that adapt to each learner’s goals and momentum. The system surfaces reflective questions, follow-up activities, and resource suggestions in real time to keep small-group study on track.",
  },
  {
    type: "text",
    content:
      "I designed the interaction flow, led co-design sessions with student tutors, and built the prototype interface that orchestrates LLM-generated guidance. We evaluated the system in live study sessions to measure engagement, agency, and perceived usefulness.",
  },
  {
    type: "image",
    src: "/img/helloworld.png",
    caption:
      "Low-fidelity storyboard used during participatory design workshops.",
  },
];

const TutoSupportProject = () => {
  return (
    <ProjectTemplate
      sectionTitle="Projects"
      id="tutosupport-project"
      title="TutoSupport — AI-Augmented Peer Learning Sessions"
      projectPeriod="Aug 2024 – Jan 2025"
      role="Product Design · Prototype Engineering · Study Facilitation"
      members={["Hyewon Lee", "Peer Tutors at KAIST"]}
      blocks={blocks}
    />
  );
};

export default TutoSupportProject;
