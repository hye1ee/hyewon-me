import styled from "styled-components";
import { colors } from "utils/styles";

interface NewsItemProps {
  icon: string;
  line: string;
  pinned: boolean;
  date?: string;
}

const NewsItem = (props: NewsItemProps) => {
  return (
    <NewsItemWrapper pinned={props.pinned}>
      <div
        style={{
          width: "100%",
          height: "fit-content",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: "20px" }}>{props.icon}</div>
        {props.date && (
          <div style={{ fontSize: "12px", color: colors.darkgray }}>
            {props.date}
          </div>
        )}
      </div>
      <div style={{ width: "100%", whiteSpace: "pre-wrap", fontSize: "14px" }}>
        {props.line}
      </div>
    </NewsItemWrapper>
  );
};

export default NewsItem;

const NewsItemWrapper = styled.div<{ pinned: boolean }>`
  width: 280px;
  @media (width <= 1280px) {
    width: 240px;
  }
  @media (width >= 1440px) {
    width: 300px;
  }
  height: 140px;

  flex: 0 0 auto;

  box-sizing: border-box;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  color: ${colors.black};
  border-bottom: 1px solid ${colors.gray};

  background-color: ${(props) =>
    props.pinned ? colors.lightgray_highlight : colors.lightgray};

  &:hover {
    background-color: ${colors.secondary};
  }
  cursor: pointer;
  transition: all 0.5s;
`;
