import ProjectTemplate, {
  ProjectContentBlock,
} from "@components/ProjectTemplate";

const blocks: ProjectContentBlock[] = [
  {
    type: "text",
    content:
      "Dancing Bunny is a motion-reactive installation that turns participant gestures into playful character choreography. The experience encourages collaborative creativity by letting friends improvise dance moves that are mirrored by an on-screen bunny avatar.",
  },
  {
    type: "embed",
    ratio: 56,
    html: '<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1135722625?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Dancing Bunny in NYC"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
  },
  {
    type: "image",
    src: "/img/helloworld.png",
    caption: "Prototype projection set-up used for gallery testing.",
  },
  {
    type: "text",
    content:
      "My contributions spanned interaction design, real-time animation programming, and exhibition staging. I experimented with pose-estimation pipelines to map body movements to expressive character rigs, tuning the feedback loop for instant delight.",
  },
];

const DancingBunnyProject = () => {
  return (
    <ProjectTemplate
      sectionTitle="Project"
      id="dancingbunny"
      title="Dancing Bunny — Motion-Driven Character Choreography"
      projectPeriod="Jan 2024 - Jun 2024"
      role="Experience Design · Creative Coding · Installation Lead"
      members={["Hyewon Lee", "Collaborating Performers"]}
      blocks={blocks}
    />
  );
};

export default DancingBunnyProject;
