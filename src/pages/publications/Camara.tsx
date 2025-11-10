import PublicationTemplate, {
  PublicationAuthor,
  PublicationContentBlock,
  PublicationLink,
} from "@components/PublicationTemplate";
import { getLocalUrl } from "utils";

const links: PublicationLink[] = [
  {
    icon: "/icon/paper.svg",
    href: "https://dl.acm.org/doi/10.1145/3706599.3721180",
    text: "ACM DL",
  },
  {
    icon: "/icon/pdf.svg",
    href: getLocalUrl("/pdf/camara-full.pdf"),
    text: "Preprint",
  },
];

const authors: PublicationAuthor[] = [
  {
    img: "/img/profile.png",
    name: "Hyewon Lee",
    link: "https://www.hyewon.me/",
    affiliation: "KAIST",
  },
  {
    img: "https://media.licdn.com/dms/image/v2/D5603AQFSVvZ6RqcqLQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730177940178?e=1764201600&v=beta&t=yIfwLNSow84x8TZOz-CFyx7-O5ZR5H6N4xkH4SQvnSs",
    name: "Christopher Bannon",
    link: "https://www.linkedin.com/in/cbannon/",
    affiliation: "KAIST",
  },
  {
    img: "https://make.kaist.ac.kr/images/people/andrea_bianchi.jpg",
    name: "Andrea Bianchi",
    link: "https://make.kaist.ac.kr/andrea",
    affiliation: "KAIST",
  },
];

const blocks: PublicationContentBlock[] = [
  {
    type: "youtube",
    url: "https://youtu.be/-1f3vTEJsO0",
  },
];

const abstractText =
  "Camera layout is a critical aspect of digital production, shaping the narrative and emotional tone of animation, CGI, and previsualization. However, managing camera movements in 3D space is a known challenge due to the complexity of controlling six degrees of freedom (DoF). Virtual camera systems aim to replicate the functionality of physical cameras, allowing users to manipulate a virtual camera within a digital scene. However, these systems often struggle with environmental constraints and can lead to spatial disorientation. To address these limitations, we present CamARa, an augmented camera layout system that leverages augmented reality (AR) for intuitive, spatially aware interaction. CamARa allows users to explore and create camera movements with a mobile device, utilizing spatial reference in the environment. It visualizes movement trajectories in AR, facilitating collaboration and iterative design. This work highlights the potential of AR as a versatile alternative to traditional and VR-based camera layout tools, bridging the gap between physical and virtual spaces to support digital cinematographic workflows.";

const bibtexText = `@inproceedings{10.1145/3706599.3721180,
author = {Lee, Hyewon and Bannon, Christopher and Bianchi, Andrea},
title = {CamARa: Exploring and Creating Camera Movements with Spatial Reference in Augmented Reality},
year = {2025},
isbn = {9798400713958},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3706599.3721180},
doi = {10.1145/3706599.3721180},
booktitle = {Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems},
articleno = {703},
numpages = {5},
keywords = {camera layout, augmented reality, virtual camera, spatial reference},
location = {},
series = {CHI EA '25}}`;

const Camara = () => {
  return (
    <PublicationTemplate
      sectionTitle="CHI Extended Abstracts 2025"
      id="chi-ea-2025"
      title={`CamARa: Exploring and Creating Camera Movements \nwith Spatial Reference in Augmented Reality`}
      links={links}
      authors={authors}
      blocks={blocks}
      sections={[
        { title: "Abstract", body: abstractText },
        { title: "Bibtex", body: bibtexText, kind: "bibtex" },
      ]}
    />
  );
};

export default Camara;
