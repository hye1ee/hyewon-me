import { newsIcons } from "@assets/strings/news";
import styled from "styled-components";
import { colors } from "utils/styles";

interface NewsItemProps {
  icon: string;
  line: string;
  date: string;
}

const NewsItem = (props: NewsItemProps) => {
  // Extract emoji from the line - works with es5
  const emojiRegex =
    /([\uD83C][\uDDE6-\uDDFF])|([\uD83C][\uDF00-\uDFFF])|([\uD83D][\uDC00-\uDE4F\uDE80-\uDEFF])|([\u2600-\u27BF])/g;
  const matches = props.line.match(emojiRegex);
  const flag = matches && matches.length > 0 ? matches[matches.length - 1] : "";

  // Remove emoji from the line for display
  const lineWithoutFlag = props.line.replace(emojiRegex, "").trim();

  return (
    <NewsItemWrapper>
      <DateColumn>{props.date}</DateColumn>
      <EventColumn>{props.line}</EventColumn>
    </NewsItemWrapper>
  );
};

export default NewsItem;

const NewsItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9px 0;
  border-bottom: 1px solid ${colors.gray};

  &:last-child {
    border-bottom: none;
  }
`;

const DateColumn = styled.div`
  font-size: 12px;
  flex-shrink: 0;
  width: 70px;
  color: ${colors.darkgray};
`;

const EventColumn = styled.div`
  flex: 1;
  font-size: 12px;
  color: ${colors.black};
`;

const FlagColumn = styled.div`
  font-size: 16px;
  flex-shrink: 0;
  margin-left: auto;
`;
