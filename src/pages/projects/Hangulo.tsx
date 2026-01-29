import ProjectTemplate, {
  ProjectContentBlock,
} from "@components/ProjectTemplate";
import { getLocalUrl } from "utils";

const blocks: ProjectContentBlock[] = [
  {
    type: "text",
    content:
      "The design process is commonly understood as an iterative cycle of ideation, implementation, and evaluation. While prior research in AI-supported design has extensively explored AI assistance during ideation and evaluation, support for the implementation stage, where designers refine and develop their ideas into meaningful outcomes, remains underexplored. Recent MCP-based tool-calling agents enable task delegation through textual prompts but burden designers with deciding when and how to invoke the agent, and tend to automate implementation in a single step, overlooking the ongoing reflection during this stage. In this work, we present Hangulo, an AI-supported Korean lettering tool, to demonstrate that effective AI support for implementation need not require designers to explicitly control every action nor automate the entire process at once. Instead, such support can be designed to gradually augment designers' evolving inspirations within their existing workflows, preserving opportunities for micro-level reflection throughout implementation.",
  },

  {
    type: "image",
    src: "/projects/hangulo-1.png",
    caption: "Hangulo's interface: (A) Vector canvas displaying the Korean word '말달리자', (B) Vector operation panel with six standard tools and (B*) two sketching tools, (C) Syllable layers of the target lettering word where the letter '말' is active, (D) Phoneme layers showing all vowels and consonants of the active syllable layer: 'ㅁ', 'ㅏ', 'ㄹ', (E) Style Spread agent, (F) Sketch Apply agent.",
  },
  {
    type: "text",
    content:
      "Through research with Korean lettering practitioners (N=8), We identified two key challenges: designers struggle to extend stylistic ideas across structurally different letters while maintaining visual coherence, and modifying vectorized letterforms is tedious, discouraging experimentation. These insights informed the design of a system that optimizes cumbersome vector manipulation while preserving opportunities for creative exploration through gradual augmentation rather than full automation.",
  },
  {
    type: "image",
    src: "/projects/hangulo-2.png",
    caption: "Overview of the compositional structure of Hangul. Five basic consonant forms and three basic vowel forms act as visual primitives. These primitives expand into 21 consonants and 19 vowels. The resulting consonant and vowel elements are then arranged within six compositional layouts to form complete Hangul syllable blocks.",
  },
  {
    type: "text",
    content:
      "Hangulo integrates AI assistance into Korean lettering workflows through two core features. Style Spread analyzes stylistic changes made to a single letter and intelligently propagates them across other letters with similar structural forms, generating a reviewable plan that explains how each letter will adapt. Sketch Apply interprets designers' rough sketches—whether outline shapes or stroke skeleton deformations—and generates multiple vector adaptations, enabling quick exploration of stylistic ideas. Together, these features support gradual idea development during implementation, allowing designers to maintain creative control while reducing tedious manual work.",
  },
  {
    type: "image",
    src: "/projects/hangulo-3.png",
    caption: "Two core AI features of Hangulo: (A) Style Spread, (B) Sketch Apply with skeleton sketch using Marker tool, (C) Sketch Apply with outline sketch using Pencil tool.",
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
      title="Hangulo: An AI-Assisted Vector Editing Tool for Korean Lettering"
      projectPeriod="Mar 2025 - Dec 2025"
      role="Research Lead"
      links={[
        {
          icon: "/icon/pdf.svg",
          href: getLocalUrl("/pdf/hangulo.pdf"),
          text: "Preprint",
        },
      ]}
      members={["Hyewon Lee", "Tak Yeon Lee"]}
      blocks={blocks}
    />
  );
};

export default HanguloProject;
