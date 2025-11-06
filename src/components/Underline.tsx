import React, { useState } from "react";
import { colors } from "utils/styles";

const Underline = ({ text, link }: { text: string; link: string }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={() => window.open(link, "_blank")}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-block",
        cursor: "pointer",
        color: hover ? colors.black : colors.black,
        textDecoration: hover ? "underline solid" : "none",
        fontWeight: 600,
        // textDecoration: "underline dotted",
        transition: "color 0.2s, text-decoration 0.2s",
      }}
    >
      {text}
    </div>
  );
};

export default Underline;
