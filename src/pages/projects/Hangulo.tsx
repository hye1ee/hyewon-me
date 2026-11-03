import ProjectTemplate, {
  ProjectContentBlock,
} from "@components/ProjectTemplate";
import { getLocalUrl } from "utils";

const blocks: ProjectContentBlock[] = [
  {
    type: "text",
    content:
      "Design typically unfolds as an iterative cycle of ideation, implementation, and evaluation. Prior work has extensively explored AI support for ideation and evaluation, leaving implementation, where designers turn raw ideas into outcomes, comparatively underexplored. Many design agents today generate outcomes in a single pass from a text prompt, yet implementation rarely happens in one step. It unfolds through many micro-actions, each involving its own reflection-in-action, and collapsing it into a single upfront specification leaves little room for this reflection. With Hangulo, a Korean lettering tool featuring workflow-embedded agents, we explore how AI can augment designers' in-progress edits at the level of micro-actions, so that designers retain moment-to-moment reflection while still benefiting from automation.",
  },
  {
    type: "image",
    src: "/projects/hangulo-interface.png",
    caption:
      "Interface of Hangulo: a vector canvas with standard and sketching tools, syllable and phoneme layers of the target word, and the Style Spread and Sketch Apply agents invoked from the characters at the bottom of the canvas.",
  },
  {
    type: "text",
    content:
      "We ground this exploration in Korean lettering, a domain with strong structural constraints and rich expressive possibilities. Hangul's 19 consonants and 21 vowels all derive from 5 basic consonant forms and 3 basic vowel forms, assembling into 6 compositional block structures. This shared, decomposable structure breaks lettering work into smaller, organically related units: a single stroke, a phoneme, a syllable. Through reviewing lettering communities and tutorials, a survey with practitioners (N=8), and validation with a professional designer, we identified two pain points: extending a stylistic idea to structurally different phonemes while balancing consistency and variation (e.g., a style for 'ㅅ' extends easily to 'ㅈ', sharing its triangular form, but not to 'ㅁ'), and cumbersome editing of vectorized letterforms that discourages exploring small variations. These shaped two design goals: reduce tedious vector manipulation, and preserve micro-level reflection by augmenting emerging ideas rather than replacing designers' decision-making.",
  },
  {
    type: "image",
    src: "/projects/hangulo-loop.png",
    scale: 0.8,
    caption:
      "Each design move, such as editing a letter or sketching over it, is read by the agent, which infers its intent and augments the idea; the designer then reviews and adjusts, and the next move starts the loop again.",
  },
  {
    type: "text",
    content:
      "Hangulo is a web-based vector editing application built with Paper.js, featuring six standard vector operations and two sketching operations. Once a designer inputs the target word, the system constructs a layer for each syllable and phoneme, starting from an empty canvas or an imported base font or SVG file. The two agent features use Claude Haiku for interpretation and planning and Claude Sonnet for execution.",
  },
  {
    type: "text",
    content: (
      <>
        <strong>Style Spread</strong> propagates a style edit to structurally
        related letters rather than treating each letter in isolation. When a
        designer modifies a consonant or vowel, the pre- and post-edit path
        data enter the agent pipeline. The edit interpretation module infers
        the designer's intention, and the form similarity computation module
        measures how close each candidate jamo is to the edited one, using an
        annotated Hangul jamo dataset that groups all consonants and vowels
        into nine form groups and encodes 18 form-level features. Designers
        select the propagation range from these similarity scores, review the
        plan the agent drafts for each letter, and selectively import the
        generated results into the canvas.
      </>
    ),
  },
  {
    type: "image",
    src: "/projects/hangulo-spread-pipeline.webp",
    caption: "Agent pipeline of Style Spread.",
  },
  {
    type: "image",
    src: "/projects/hangulo-spread-steps.png",
    caption:
      "Style Spread in four steps: review the style change, select the propagation scope, review the propagation plan, and apply it to new letters.",
  },
  {
    type: "text",
    content:
      "To let the agent reason about shared geometric characteristics across letters, each jamo in the annotated Hangul jamo dataset is described with a set of primitive form features (e.g., double-corner, diagonal-line, upper-tick) and assigned to one of nine form groups (e.g., square-group, circular-group, vertical-line-group). The structural similarity between the edited jamo t and a candidate jamo c is scored by adding 2 when they belong to the same form group, subtracting 1 when one is a consonant and the other a vowel, and adding 1 for every form feature they share. Higher scores rank candidates as stronger propagation targets.",
  },
  {
    type: "image",
    src: "/projects/hangulo-similarity-score.png",
    caption: "Structural similarity score between a target jamo t and a candidate jamo c.",
  },
  {
    type: "image",
    src: "/projects/hangulo-form-features.png",
    scale: 0.8,
    caption: "Primitive form features used to describe Hangul jamo shapes.",
  },
  {
    type: "image",
    src: "/projects/hangulo-form-groups.png",
    scale: 0.8,
    caption: "Grouping of Hangul jamo based on shared form characteristics.",
  },
  {
    type: "text",
    content: (
      <>
        <strong>Sketch Apply</strong> lets designers communicate raw stylistic
        intentions through informal sketches. Our formative interviews
        identified two recurring sketch types in letter design: skeleton
        sketches, expressing how a stroke's axis should change (e.g., bend,
        wave, tilt), and outline sketches, expressing how a stroke's form
        should be shaped (e.g., adding decoration or an expressive cap).
        Designers draw them directly over a letter with the Marker and Pencil
        tools. The sketch interpretation module infers the intended
        transformation, and the execution module generates candidate vectors
        reflecting distinct readings of the sketch, from which designers
        select one to import.
      </>
    ),
  },
  {
    type: "image",
    src: "/projects/hangulo-sketch-pipeline.png",
    caption:
      "Agent pipeline of Sketch Apply with (A) skeleton and (B) outline sketches.",
  },
  {
    type: "image",
    src: "/projects/hangulo-sketch-steps.png",
    caption:
      "Sketch Apply with a skeleton sketch (left) and an outline sketch (right): review the guide sketch, then pick an edited result to import.",
  },
  {
    type: "youtube",
    url: "https://youtu.be/sW_P90Yxvqw",
    caption: "Please use English subtitles",
  },
  {
    type: "image",
    src: "/projects/hangulo-4.png",
  },
  {
    type: "text",
    content:
      "Hangulo was presented at the 2025 KAIST Industrial Design Exhibition at Nodeul Gallery in Seoul from December 13 to 20, demonstrating the potential of AI agents to augment traditional lettering workflows. Following evaluations by professional designers, a publication is planned to discuss the effects of using workflow-friendly artifacts in AI collaboration, compared to traditional text-based prompts, and to examine how this approach can reshape Korean lettering design workflows.",
  },
];

const HanguloProject = () => {
  return (
    <ProjectTemplate
      sectionTitle="Project"
      id="hangulo"
      title="Hangulo: Demonstrating Workflow-Embedded AI Support for Korean Lettering Implementation"
      projectPeriod="Mar 2025 - Dec 2025"
      role="Research Lead"
      links={[
        {
          icon: "/icon/paper.svg",
          href: getLocalUrl("/pdf/hangulo-full.pdf"),
          text: "Paper",
        },
        {
          icon: "/icon/pdf.svg",
          href: getLocalUrl("/pdf/hangulo.pdf"),
          text: "Preprint",
        },
        {
          icon: "/icon/pdf.svg",
          href: getLocalUrl("/pdf/hangulo-appendix.pdf"),
          text: "Appendix",
        },
      ]}
      members={["Hyewon Lee", "Tak Yeon Lee"]}
      blocks={blocks}
    />
  );
};

export default HanguloProject;
