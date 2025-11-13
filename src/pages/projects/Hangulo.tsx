import ProjectTemplate, {
  ProjectContentBlock,
} from "@components/ProjectTemplate";

const blocks: ProjectContentBlock[] = [
  {
    type: "text",
    content:
      "Hangulo is an AI-assisted lettering system that helps designers create multiple Hangul characters starting from a single one. In traditional workflows, Korean lettering designers often begin on grid paper, layering sketches to iteratively refine letterforms before transferring them into Illustrator for vector editing. While this analog process enables careful control and nuanced expression, it is also labor-intensive, repetitive, and difficult to scale, especially in Hangul, where its compositional structure requires consistent replication of stylistic features across many characters.",
  },
  {
    type: "text",
    content:
      "Through interviews and observations with professional lettering designers, I identified two major characteristics of their current workflows. (1) They iteratively overlay hand sketches on grid paper to adjust letterforms, since direct vector editing is cumbersome and disrupts the flow of ideation. (2) They often reuse stylistic features such as stroke angle, curvature, or cap shape across consonants and vowels to maintain visual coherence. Both practices demand substantial manual effort, revealing opportunities to automate repetitive operations while preserving creative intent.",
  },
  {
    type: "text",
    content:
      "Hangulo introduces an AI-assisted design workflow that automates manual vector work while augmenting designers' control and exploration. The system supports two key functions: (1) Sketch-based Editing - the agent interprets sketches overlaid on an existing letter, infers the designer's intent, and executes corresponding vector edits. (2) Smart Propagation - leveraging the compositional logic of Hangul, where basic strokes form consonants and vowels that assemble into syllables, the system adaptively propagates stylistic transformations from one character to others. By combining these capabilities, Hangulo bridges the gap between analog sketching and digital vector workflows and complements designers rather than replacing their original creative process.",
  },
  {
    type: "text",
    content:
      "Hangulo will be presented at the KAIST Industrial Design Graduation Exhibition in Seoul from December 13 to 20, demonstrating the potential of AI agents in augmenting traditional lettering workflows. Following designer evaluations, a preprint publication is planned to discuss the effects of using workflow-friendly artifacts in AI collaboration compared to traditional text prompts, and how this approach can reshape Korean lettering design workflows.",
  },
];

const HanguloProject = () => {
  return (
    <ProjectTemplate
      sectionTitle="Project"
      id="hangulo"
      title="Hangulo: An AI-Assisted Vector Editing Tool for Korean Lettering"
      projectPeriod="Mar 2025 - Present"
      role="Research Lead"
      members={["Hyewon Lee"]}
      blocks={blocks}
    />
  );
};

export default HanguloProject;
