import ProjectTemplate, {
  ProjectContentBlock,
} from "@components/ProjectTemplate";

const blocks: ProjectContentBlock[] = [
  {
    type: "text",
    content:
      "This research investigates how AI agents can collaborate with designers within design tools to support co-creation. Design workflows are inherently tacit, shaped by designers' intuition, experience, and contextual intent. Effective tools should support design cognition and externalization through low-level operations, enabling reflection-in-action with immediate feedback. Maintaining a sense of agency and flow is crucial for creativity, requiring flexibility, incremental construction, and continuous feedback throughout the process. Despite recent advances in generative models, existing systems still (1) lack tool-integrated co-creation, (2) rely on chat-based delegation, and (3) fail to adapt to designers' dynamic workflows. This work addresses these gaps by exploring AI as an in-tool, co-creative collaborator.",
  },
  {
    type: "youtube",
    url: "https://youtu.be/FhBf1iB8gnY",
  },
  {
    type: "text",
    content:
      "We designed a probe design-agent system that enables in-tool collaboration through three key components that have been overlooked in prior systems: (1) voice input and object referencing, (2) shared implementation workflow, and (3) visualization of the collaborator's presence. The system is implemented as a Figma plugin utilizing the Claude 3.5 Sonnet model.",
  },
  {
    type: "image",
    src: "/projects/tacitagent-1.png",
  },
  {
    type: "text",
    content:
      "With this system, we aim to examine how collaboration changes when users can observe and intervene in the agent's tool-based actions. Specifically, we investigate (1) the effects of revealing and allowing intervention into the agent's action sequence, (2) the trajectory-level interaction patterns such as intervention, feedback, and delegation that emerge during concurrent design, and (3) how these interactions influence users' sense of agency, control, and oversight compared to output-only agents. By enabling process-level interactions between humans and agents, this work explores new ways of collaborating and shaping creative workflows beyond traditional prompt-based delegation, providing groundwork for future research on co-creation within design tools.",
  },
];

const TacitAgentProject = () => {
  return (
    <ProjectTemplate
      sectionTitle="Project"
      id="tacit-agent-project"
      title="From Commands to Collaboration: Human-AI Co-Design with Generative Agents on Canvas"
      projectPeriod="Jul 2025 - Present"
      role="Co-Researcher, System Design & Implementation"
      members={[
        "Kihoon Son",
        "Hyewon Lee",
        "Yoonsu Kim",
        "Tae Soo Kim",
        "DaEun Choi",
        "Yoonjoo Lee",
        "John Joon Young Chung",
        "Hyunjoon Jung",
        "Juho Kim",
      ]}
      blocks={blocks}
    />
  );
};

export default TacitAgentProject;
