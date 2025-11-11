import ProjectTemplate, {
  ProjectContentBlock,
} from "@components/ProjectTemplate";

const blocks: ProjectContentBlock[] = [
  {
    type: "text",
    content:
      "Tacit Agent captures hard-to-articulate design decisions within product teams and replays them as lightweight prompts during later sprints. By blending meeting transcripts, sketches, and artifacts, the system keeps nuance alive even as teams rotate.",
  },
  {
    type: "text",
    content:
      "My role covered opportunity discovery, system architecture, and the interaction model for surfacing tacit cues at the right moment. I orchestrated workshops with PMs and designers to prototype nudges that fit naturally into existing rituals.",
  },
  {
    type: "image",
    src: "/img/helloworld.png",
    caption: "Figma explorations for Tacit Agent’s contextual memory cards.",
  },
];

const TacitAgentProject = () => {
  return (
    <ProjectTemplate
      sectionTitle="Projects"
      id="tacit-agent-project"
      title="Tacit Agent — Preserving Nuance in Creative Teamwork"
      projectPeriod="Jan 2025 – Present"
      role="Product Strategy · Systems Design · Rapid Prototyping"
      members={["Hyewon Lee", "Collaborating Product Teams"]}
      blocks={blocks}
    />
  );
};

export default TacitAgentProject;
