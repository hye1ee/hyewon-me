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
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "8px",
        }}
      >
        <div style={{ fontSize: "17px", flexShrink: 0 }}>{props.icon}</div>
        <div
          style={{
            flex: 1,
            fontSize: "13px",
            lineHeight: "1.3",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {props.line}
        </div>
        {props.date && (
          <div
            style={{
              fontSize: "12px",
              color: colors.darkgray,
              flexShrink: 0,
              marginLeft: "8px",
            }}
          >
            {props.date}
          </div>
        )}
      </div>
    </NewsItemWrapper>
  );
};

export default NewsItem;

const NewsItemWrapper = styled.div<{ pinned: boolean }>`
  width: fit-content;
  min-width: 200px;
  height: 45px;

  flex: 0 0 auto;

  box-sizing: border-box;
  padding: 12px 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  color: ${colors.black};
  border: 1px solid black;
  background-color: white;

  &:hover {
    background-color: ${colors.secondary};
    /* transform: translateY(-2px); */
    /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); */
  }
  cursor: pointer;
  transition: all 0.3s ease;
`;
