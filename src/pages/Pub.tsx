import PageLayout from "@components/PageLayout";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { colors } from "utils/styles";

const Pub = () => {
  return (
    <PageLayout style={{ padding: "32px", gap: "28px" }}>
      <div>publication 1</div>
      <div>publication 2</div>
      <div>publication 3</div>
      <div>publication 4</div>
      <Outlet />
    </PageLayout>
  );
};
export default Pub;

const Text = styled.div`
  @media (width <= 1024px) {
    white-space: normal;
  }
`;

const PubImg = styled.div`
  width: 28vw;
  box-sizing: border-box;
  padding: 0 50px 0 0;
`;

const PubDescription = styled.div`
  display: inline-block;
  font-size: 15px;
  line-height: 1.4;
  font-weight: 350;
`;
const PubContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PubContentCol = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 40px;
`;

// interface PubSectionProps {
//   title: string;
//   tags?: string[];
//   contents?: string[][];
// }

// const PubSection = (props: PubSectionProps) => {
//   return (
//     <PubSectionWrapper>
//       <div style={{ fontSize: "18px", fontWeight: "bold" }}>{props.title}</div>
//       <PubSectionDivider />
//       {props.tags && (
//         <PubSectionTagWrapper>
//           {props.tags.map((tag) => (
//             <PubSectionTag>{tag}</PubSectionTag>
//           ))}
//         </PubSectionTagWrapper>
//       )}
//       {props.contents && (
//         <PubSectionContentWrapper>
//           {props.contents.map((content) => (
//             <PubSectionContent>
//               <div style={{ fontSize: "20px" }}>{content[0]}</div>
//               <div style={{ fontSize: "15px", color: "darkgray" }}>
//                 {content[1]}
//               </div>
//             </PubSectionContent>
//           ))}
//         </PubSectionContentWrapper>
//       )}
//     </PubSectionWrapper>
//   );
// };
// const PubSectionWrapper = styled.div`
//   width: 100%;
//   height: fit-content;

//   display: flex;
//   flex-direction: column;
// `;

// const PubSectionDivider = styled.div`
//   width: 100%;
//   height: 1px;
//   background-color: rgba(0, 0, 0, 0.5);
//   margin: 5px 0px 10px 0px;
// `;

// const PubSectionTagWrapper = styled.div`
//   width: fit-content;
//   display: flex;
//   flex-direction: row;
//   gap: 10px;
// `;

// const PubSectionContentWrapper = styled.div`
//   width: fit-content;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const PubSectionTag = styled.div`
//   width: fit-content;
//   height: fit-content;
//   box-sizing: border-box;
//   padding: 5px 10px;
//   border-radius: 10px;
//   border: 1px solid black;
//   font-weight: bold;
// `;

// const PubSectionContent = styled.div`
//   width: fit-content;
//   display: flex;
//   flex-direction: column;
// `;
