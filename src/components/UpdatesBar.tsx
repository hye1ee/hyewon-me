import { useState } from "react";
import styled from "styled-components";
import { ChevronDown } from "lucide-react";
import { news } from "@assets/strings/news";
import { colors } from "utils/styles";

const TINT = "#f5f5f5"; // neutral light gray
const RULE = "rgba(17, 17, 17, 0.08)";

// Toolbar-style strip with the latest update; the toggle reveals the rest
const UpdatesBar = () => {
  const [open, setOpen] = useState(false);
  const [latest, ...rest] = news;
  if (!latest) return null;

  return (
    <Bar id="updates">
      <Row
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        disabled={rest.length === 0}
      >
        <DateText>{latest.date}</DateText>
        <Line>{latest.line}</Line>
        {rest.length > 0 && (
          <Toggle $open={open}>
            <ChevronDown size={16} strokeWidth={1.8} />
          </Toggle>
        )}
      </Row>
      {open && (
        <List>
          {rest.map((item) => (
            <Item key={`${item.date}-${item.line}`}>
              <DateText>{item.date}</DateText>
              <Line>{item.line}</Line>
            </Item>
          ))}
        </List>
      )}
    </Bar>
  );
};

export default UpdatesBar;

const Bar = styled.div`
  width: 100%;
  border-radius: 10px;
  background: ${TINT};
  overflow: hidden;
`;

const Row = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border: none;
  background: none;
  font: inherit;
  text-align: left;
  color: ${colors.black};
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`;

const DateText = styled.span`
  flex-shrink: 0;
  width: 64px;
  font-size: 13px;
  color: ${colors.darkgray};
  font-variant-numeric: tabular-nums;
`;

const Line = styled.span`
  flex: 1;
  font-size: 14px;
  line-height: 1.4;
`;

const Toggle = styled.span<{ $open: boolean }>`
  flex-shrink: 0;
  display: flex;
  padding: 4px;
  border-radius: 6px;
  color: ${colors.black};
  transform: rotate(${(props) => (props.$open ? 180 : 0)}deg);
  transition: transform 0.2s, background 0.2s;

  ${Row}:hover & {
    background: ${RULE};
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px 6px;
`;

const Item = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 8px 0;
  border-top: 1px solid ${RULE};
`;
