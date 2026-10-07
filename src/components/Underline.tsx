import React, { useState } from "react";
import { colors } from "utils/styles";

const Underline = ({ text, link }: { text: string; link: string }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={() => window.open(link)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-block",
        cursor: "pointer",
        color: hover ? colors.darkgray : colors.black,
        textDecoration: "underline",
        textDecorationThickness: "1px",
        textUnderlineOffset: "3px",
        fontWeight: 500,
        transition: "color 0.2s",
      }}
    >
      {text}
    </div>
  );
};

export default Underline;
