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

const projects: ProjectData[] = [{
  title: "HyperMemory",
  description: "",
  img: "/img/hypermemory.png",
  year: 2024,
  type: "Web",
  selected: true,
  link: "https://github.com/hye1ee/hypermemory",
  tags: ["Physical Computing", ""]
},
{
  title: "Minionize",
  description: "Minionize is a web-based mirror room space where user can generate their minion mask and try it on in the mirror room via AR experience. It conveys a message that 'What is the matter even if we are different look like minions?'",
  img: "/img/minionize.png",
  year: 2024,
  type: "Web",
  selected: false,
  link: "https://github.com/hye1ee/minionize",
  tags: ["AR"]
},
{
  title: "VIVID",
  description: "VIVID is an LLM(Large Language Model) collaborative authoring tool to design, evaluate, and modify pedagogical dialogues. It is built on React with Typescript and Redux, utilizing OpenAI APIs.",
  img: "/img/vivid.png",
  year: 2023,
  type: "Research",
  selected: true,
  link: "https://github.com/hye1ee/VIVID-demo",
  tags: ["HCI", "LLM"]
},
{
  title: "MultiDreamer",
  description: "MultiDreamer is an end-to-end machine learning pipeline based on SyncDreamer. It enables to generate of 3D meshes from a single-view multi-objects image. The chamfer distance between the inferred model and the ground truth model has decreased by 60% compared with the baseline.",
  img: "/img/multidreamer.png",
  year: 2023,
  type: "Research",
  selected: true,
  link: "https://github.com/hye1ee/MultiDreamer",
  tags: ["ML", "3D"]
},
{
  title: "MySelfieRoom",
  description: "MySelfieRoom is a web-based online photobooth service that can take, edit, and share photos. Developed with Typescript and React. To handle the image processing procedure, states are managed by Recoil.",
  img: "/img/myselfieroom.png",
  year: 2023,
  type: "Web",
  selected: true,
  link: "https://github.com/hye1ee/My-SelfieRoom",
  tags: ["Social", "AR"]
},
{
  title: "Radione",
  description: "Radione is a brand new type of radio that improved the usability of finding channels. It simplifies the process at one touch by providing a channel chip that contains channel information as resistors.",
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
//   link: window.location.origin + "/projects/bunny",
//   tags: ["Tangible UI", "Education"]
// },
{
  title: "RunThroughGravity",
  description: "RunThroughGravity is a mini arcade game implemented with p5.js based on pure Javascript. It developed by adapting an observer pattern to organize game objects and utilized Firebase to manage users.",
  img: "/img/runthroughgravity.png",
  year: 2022,
  type: "Web",
  selected: true,
  link: "https://github.com/hye1ee/run-through-gravity",
  tags: ["P5.js", "Firebase"]
},
{
  title: "BlackGhost",
  description: "BlackGhost is a web-based puzzle game built for Korean reality game show, Treasure Hunt. It is implemented based on React, packed as an app by Electron. To be utilized in a game, its auto-play and termination logic have been developed with a shell script using Automator to run in the background process.",
  img: "/img/blackghost.png",
  year: 2022,
  type: "Web",
  selected: false,
  link: "https://github.com/hye1ee/blackghost",
  tags: ["React", "Electron"]
},
{
  title: "ReliefCube",
  description: "",
  img: "/img/reliefcube.png",
  year: 2021,
  type: "Design",
  selected: false,
  link: "https://youtu.be/GWTmQSsP5BI",
  tags: ["React", "Electron"]
}]
export default projects;