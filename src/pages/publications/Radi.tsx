import PublicationTemplate, {
  PublicationAuthor,
  PublicationContentBlock,
  PublicationLink,
} from "@components/PublicationTemplate";
import { getLocalUrl } from "utils";

const links: PublicationLink[] = [
  {
    icon: "/icon/paper.svg",
    href: "https://dl.acm.org/doi/10.1145/3746058.3758404",
    text: "ACM DL",
  },
  {
    icon: "/icon/pdf.svg",
    href: getLocalUrl("/pdf/radi-full.pdf"),
    text: "Preprint",
  },
];

const authors: PublicationAuthor[] = [
  {
    name: "Hyewon Lee*",
    affiliation: "KAIST",
    link: "https://hyewon.me",
    img: "/img/profile.png",
  },
  {
    name: "Ihchae Ryu*",
    affiliation: "KAIST",
    link: "https://troubled-molybdenum-fe3.notion.site/Hi-I-m-Ihchae-This-is-my-Portfolio-11b4578ced4d806bbffde450c6891239",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQHA_leQAlTqDw/profile-displayphoto-shrink_800_800/B4EZUdb_GgHUAc-/0/1739955631872?e=1764201600&v=beta&t=Ww94jQgwwYE2QaYyhh0BOuasGxQR9vsfemWcHW-MYy4",
  },
  {
    name: "Yumin Cho*",
    affiliation: "KAIST",
    link: "https://linkedin.com/in/yumin-cho",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQGZoAthSJvtjw/profile-displayphoto-crop_800_800/B4EZgyb702HoAM-/0/1753192842284?e=1764201600&v=beta&t=5HbvgoXzmJzwOc7E7zU7MJWaIlpRJaxqL5OToDHo3h4",
  },
  {
    name: "Hyunseung Lim",
    affiliation: "KAIST",
    link: "https://linkedin.com/in/hyunseung-lim-135742282",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQHyiPjXQi8h4w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689212336900?e=1764201600&v=beta&t=KSwFDlZPHkX_Tm43Orwx2UZeVFZkO8QvZ2YgvcWi3mY",
  },
  {
    name: "Hwajung Hong",
    affiliation: "KAIST",
    link: "https://galaxytourist.notion.site/galaxytourist/Hwajung-Hong-cc10b0291bbe4ca38dbf4882cd687423",
    img: "https://galaxytourist.notion.site/image/attachment%3A343bea82-dd25-46b6-a5d3-2dfbead596b5%3AHJ_2024.jpg?table=block&id=26ad88f9-47c1-80ca-abc8-e80200bcfa10&spaceId=09b423ce-60ab-4ce0-9d3a-67d80a5d670c&width=2000&userId=&cache=v2",
  },
];

const blocks: PublicationContentBlock[] = [
  {
    type: "image",
    src: "/publications/radi-1.png",
    caption: "Poster",
  },
];

const abstractText =
  "As the involvement of generative AI becomes prevalent in content creation, disclosing AI involvement is no longer optional—it is essential. Yet, how such disclosure should be designed remains underexplored. Prior works treat disclosure as a fixed label, detached from the social context in which content is created and interpreted, aiming to define a universal format. In this work, we show the necessity of considering social dynamics in disclosure design. Through a two-part study—a survey (N=33) and participatory interviews (N=6)—we examine how expectations around AI disclosure vary across text content types and relational contexts. Based on these findings, we propose a RADI, a design space for Relational and Adaptive Disclosure Interfaces, that adapts to context, content, and user roles. Our work provides a foundation for designing disclosure as a dynamic, socially responsive interface.";

const bibtexText = `@inproceedings{10.1145/3746058.3758404,
author = {Lee, Hyewon and Ryu, Ihchae and Cho, Yumin and Lim, Hyunseung and Hong, Hwajung},
title = {RADI: A Design Framework for Relational and Adaptive Disclosure Interfaces},
year = {2025},
isbn = {9798400720369},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3746058.3758404},
doi = {10.1145/3746058.3758404},
abstract = {As the involvement of generative AI becomes prevalent in content creation, disclosing AI involvement is no longer optional—it is essential. Yet, how such disclosure should be designed remains underexplored. Prior works treat disclosure as a fixed label, detached from the social context in which content is created and interpreted, aiming to define a universal format. In this work, we show the necessity of considering social dynamics in disclosure design. Through a two-part study—a survey (N=33) and participatory interviews (N=6)—we examine how expectations around AI disclosure vary across text content types and relational contexts. Based on these findings, we propose a RADI, a design space for Relational and Adaptive Disclosure Interfaces, that adapts to context, content, and user roles. Our work provides a foundation for designing disclosure as a dynamic, socially responsive interface.},
booktitle = {Adjunct Proceedings of the 38th Annual ACM Symposium on User Interface Software and Technology},
articleno = {158},
numpages = {3},
keywords = {AI disclosure, Design space, Social dynamics, Adaptive interface, Transparency},
location = {},
series = {UIST Adjunct '25}}`;

const Radi = () => {
  return (
    <PublicationTemplate
      sectionTitle="UIST Adjunct 2025"
      id="uist-adjunct-2025-radi"
      title="RADI: A Design Framework for Relational and Adaptive Disclosure Interfaces"
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

export default Radi;
