import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "utils/styles";

const WORDS = ["design", "hci", "ai", "human", "gen-ui"];
// Background / text pairs
// Halloween palette, white text
const STYLES: [string, string][] = [
  ["#ff7a00", "#ffffff"],
  ["#6b2fa0", "#ffffff"],
  ["#3f8f2a", "#ffffff"],
];
// Every so often a "boo!" sneaks into the trail
const BOO_CHANCE = 0.06;
const SPACING = 26; // px the cursor travels between tags
const LIFE_MS = 1400; // how long a tag stays before it's gone

// White field where the cursor leaves a trail of keyword tags that fade away
const TagTrailBanner = () => {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;
    let last: { x: number; y: number } | null = null;
    let word = 0;

    const drop = (x: number, y: number) => {
      const boo = Math.random() < BOO_CHANCE;
      const [bg, fg] = boo
        ? ["#111111", "#ff7a00"]
        : STYLES[Math.floor(Math.random() * STYLES.length)];
      const tag = document.createElement("span");
      tag.className = "trail-tag";
      if (boo) {
        tag.textContent = "boo!";
      } else {
        tag.textContent = WORDS[word];
        word = (word + 1) % WORDS.length;
      }
      tag.style.left = `${x}px`;
      tag.style.top = `${y}px`;
      tag.style.background = bg;
      tag.style.color = fg;
      field.appendChild(tag);
      window.setTimeout(() => tag.remove(), LIFE_MS);
    };

    const onMove = (e: PointerEvent) => {
      const rect = field.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (!last || Math.hypot(x - last.x, y - last.y) >= SPACING) {
        drop(x, y);
        last = { x, y };
      }
    };
    const onLeave = () => {
      last = null;
    };

    field.addEventListener("pointermove", onMove);
    field.addEventListener("pointerleave", onLeave);
    return () => {
      field.removeEventListener("pointermove", onMove);
      field.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <Field ref={fieldRef} aria-hidden="true" />
  );
};

export default TagTrailBanner;

const popAndFade = keyframes`
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.6); }
  12% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  70% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
`;

const Field = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
  background: #ffffff;
  border: 1px dotted ${colors.gray};
  box-sizing: border-box;
  touch-action: pan-y;

  .trail-tag {
    position: absolute;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.3;
    white-space: nowrap;
    pointer-events: none;
    animation: ${popAndFade} ${LIFE_MS}ms ease-out forwards;
  }
`;
