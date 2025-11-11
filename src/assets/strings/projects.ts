interface ProjectData {
  title: string;
  description: string;
  img: string;
  year: number;
  type: "Web" | "Research" | "Design";
  selected: boolean;
  link?: string;
  tags?: string[];
}

const projects: ProjectData[] = [
  // {
  //   title: "Tacit Agent",
  //   description: "Tacit Agent investigates tacit knowledge capture for creative teams, surfacing AI-driven nudges that support collaborative decision making.",
  //   img: "/img/helloworld.png",
  //   year: 2025,
  //   type: "Research",
  //   selected: false,
  //   link: window.location.origin + "/project/tacitagent",
  //   tags: ["Knowledge Work", "AI"]
  // },
  // {
  //   title: "Hangulo",
  //   description: "Hangulo explores language-learning interfaces that blend playful tangibles with adaptive AI feedback to support Korean script acquisition.",
  //   img: "/img/helloworld.png",
  //   year: 2025,
  //   type: "Research",
  //   selected: false,
  //   link: window.location.origin + "/project/hangulo",
  //   tags: ["Language Learning", "Tangible UI"]
  // },
  {
    title: "RADI",
    description: "RADI is a design framework for relational and adaptive disclosure interfaces that guides practitioners in crafting socially-aware AI transparency.",
    img: "/projects/thumb-radi.png",
    year: 2025,
    type: "Research",
    selected: true,
    link: window.location.origin + "/publication/radi",
    tags: ["AI Disclosure", "Design Framework"]
  },
  {
    title: "CamARa",
    description: "CamARa explores spatially-referenced camera movement authoring through augmented reality interfaces that help creators plan cinematic shots.",
    img: "/projects/thumb-camara.png",
    year: 2025,
    type: "Research",
    selected: true,
    link: window.location.origin + "/publication/camara",
    tags: ["Augmented Reality", "Creativity Support"]
  },
  {
    title: "EyesClosed",
    description: "EyesClosed is a kinetic typography project based on the lyrics of Ed Sheeran's song 'Eyes Closed'.",
    img: "/projects/thumb-eyesclosed.png",
    year: 2024,
    type: "Design",
    selected: false,
    link: window.location.origin + "/project/eyesclosed",
    tags: []
  },
  {
    title: "TutoSupport",
    description: "TutoSupport is a social video tutorial platform designed to enhance engagement and creativity in hands-on learning tasks such as knitting, cooking, or crafting.",
    img: "/projects/thumb-tutosupport.png",
    year: 2024,
    type: "Research",
    selected: false,
    // link: window.location.origin + "/project/tutosupport",
    tags: []
  },
  // {
  //   title: "Dancing Bunny",
  //   description: "Dancing Bunny is a playful interactive installation that translates motion into animated character choreography for collaborative creative play.",
  //   img: "/img/helloworld.png",
  //   year: 2024,
  //   type: "Design",
  //   selected: false,
  //   link: window.location.origin + "/project/dancingbunny",
  //   tags: ["Interactive Art", "Embodied Interaction"]
  // },
  {
    title: "HyperMemory",
    description: "HyperMemory is an interactive new media art project that visualizes the fading traces of cognition at the edge of life. Built as a web-based spatial experience with Three.js, GLSL, and Arduino.",
    img: "/img/hypermemory.png",
    year: 2024,
    type: "Design",
    selected: true,
    link: "https://github.com/hye1ee/hypermemory",
    tags: ["Physical Computing", ""]
  },
  {
    title: "Minionize",
    description: "Minionize is a web-based mirror room experience where users can generate their own minion masks and try them on through AR. What does it matter if we all look different, like minions?",
    img: "/img/minionize.png",
    year: 2024,
    type: "Web",
    selected: false,
    link: "https://github.com/hye1ee/minionize",
    tags: ["AR"]
  },
  {
    title: "VIVID",
    description: "VIVID is an AI collaborative authoring tool that introduces a human–AI collaboration interaction pipeline for designing and refining pedagogical dialogues, presented at CHI 2024.",
    img: "/img/vivid.png",
    year: 2023,
    type: "Research",
    selected: true,
    link: "https://github.com/hye1ee/VIVID-demo",
    tags: ["HCI", "LLM"]
  },
  {
    title: "MultiDreamer",
    description: "MultiDreamer is an end-to-end machine learning pipeline based on SyncDreamer. It enables to generate of 3D meshes from a single-view multi-objects image.",
    img: "/img/multidreamer.png",
    year: 2023,
    type: "Research",
    selected: true,
    link: "https://github.com/hye1ee/MultiDreamer",
    tags: ["ML", "3D"]
  },
  {
    title: "MySelfieRoom",
    description: "MySelfieRoom is a web-based online photobooth service that can take, edit, and share photos. Developed with Typescript and React and managed with Recoil.",
    img: "/projects/thumb-myselfieroom.png",
    year: 2023,
    type: "Web",
    selected: true,
    link: "https://github.com/hye1ee/My-SelfieRoom",
    tags: ["Social", "AR"]
  },
  {
    title: "Radione",
    description: "Radione is a redesign project of a mechanical radio that explores a new way of tuning channels. It simplifies the process with a single touch using a channel chip that stores frequency information through resistors.",
    img: "/img/radione.png",
    year: 2023,
    type: "Design",
    selected: true,
    link: window.location.origin + "/pdf/radione",
    tags: ["Physical Computing", "UX"]
  },
  {
    title: "Artventure",
    description: "Artventure is an interactive game toy inspired by a pictionary game. It provides an opportunity to enjoy the visual thinking process through art, away from digital stimulations.",
    img: "/img/artventure.png",
    year: 2023,
    type: "Design",
    selected: true,
    link: window.location.origin + "/pdf/artventure",
    tags: ["Physical Computing", "UX"]
  },

  // {
  //   title: "Bunny",
  //   description: "Bunny is a playful tangible storytelling companion designed to engage young creators through tactile interactions and responsive feedback.",
  //   img: "/img/helloworld.png",
  //   year: 2023,
  //   type: "Design",
  //   selected: false,
  //   link: window.location.origin + "/project/bunny",
  //   tags: ["Tangible UI", "Education"]
  // },
  {
    title: "RunThroughGravity",
    description: "RunThroughGravity is a mini arcade game implemented with p5.js. It developed by adapting an observer pattern to organize game objects and utilized Firebase to manage users.",
    img: "/img/runthroughgravity.png",
    year: 2022,
    type: "Web",
    selected: true,
    link: "https://github.com/hye1ee/run-through-gravity",
    tags: ["P5.js", "Firebase"]
  },
  {
    title: "BlackGhost",
    description: "BlackGhost is a web-based puzzle game developed for the Korean reality show Treasure Hunt, where it was featured on air. Built with React and Electron, it includes automated play and shutdown logic handled through a background shell script.",
    img: "/img/blackghost.png",
    year: 2022,
    type: "Web",
    selected: false,
    link: "https://github.com/hye1ee/blackghost",
    tags: ["React", "Electron"]
  },
  {
    title: "ReliefCube",
    description: "Relief Cube is a modular emergency relief kit designed for disaster situations. Made with honeycomb boards and 3D-printed joints, it can transform into four different types of furniture.",
    img: "/img/reliefcube.png",
    year: 2021,
    type: "Design",
    selected: false,
    link: "https://youtu.be/GWTmQSsP5BI",
    tags: ["React", "Electron"]
  },
];

export default projects;