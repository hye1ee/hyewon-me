import { useEffect, useRef } from "react";
import styled from "styled-components";

const PHOTO_SRC = "/img/profile.png";
const CELL = 8; // mosaic block size in CSS px
const INITIAL_SPLIT = 0.9; // divider starts a little above the bottom

type Palette = {
  // dark -> light: two shades of key color A, two of key color B (a
  // different hue family), then two near-whites
  figure: string[];
  sky: string[]; // background streaks
  accent: string; // sparse highlight blocks
};

// One palette is picked at random on every visit
const PALETTES: Palette[] = [
  {
    figure: ["#3fae2a", "#79c95c", "#5aa7e0", "#9fcdf0", "#c9e9b8", "#f4f6f4"],
    sky: ["#9fcdf0", "#bcdcf5", "#dcecf9", "#f4f6f4"],
    accent: "#d9b8ec",
  },
  {
    figure: ["#e8553e", "#f28c6b", "#4f8fd6", "#9cc3ef", "#fde7d6", "#fbf6f1"],
    sky: ["#fbd5c5", "#fde3d6", "#fdeee6", "#fbf6f1"],
    accent: "#ffd23f",
  },
  {
    figure: ["#6a4fc4", "#9b85e0", "#8cc63f", "#c6e48f", "#e6dcf7", "#f7f4fb"],
    sky: ["#d8cdf5", "#e6dcf7", "#f0eafb", "#f7f4fb"],
    accent: "#ff8fb1",
  },
  {
    figure: ["#1f9e89", "#5cc8a8", "#ff7f6e", "#ffb3a7", "#cdeee3", "#f3faf7"],
    sky: ["#bfe8dc", "#d6f1e8", "#e8f7f2", "#f3faf7"],
    accent: "#ffd23f",
  },
  {
    figure: ["#2b6fd6", "#5d9bea", "#f0c419", "#f7df7a", "#fbf0bf", "#fdfbf2"],
    sky: ["#cfe0f7", "#dfeafa", "#ecf2fb", "#fdfbf2"],
    accent: "#ff8fb1",
  },
];

// Deterministic per-cell noise so the mosaic doesn't flicker between builds
const hash = (x: number, y: number) => {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return n - Math.floor(n);
};

// Profile photo drawn as a pastel pixel mosaic, in a different color
// combination on each visit. The accent dots slowly wander over the figure,
// and dragging the divider up reveals the original photo underneath.
const ProfilePhoto = ({ className }: { className?: string }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    const divider = dividerRef.current;
    if (!img || !canvas || !divider) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Mosaic without accent dots; the dots are drawn on top so they can move
    const base = document.createElement("canvas");
    let cols = 0;
    let rows = 0;
    let dpr = 1;
    let isFigure: boolean[] = [];
    let accents: number[] = [];
    // Divider position, 0 = top, 1 = bottom. Mosaic above it, photo below.
    let split = INITIAL_SPLIT;

    const draw = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(base, 0, 0);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = palette.accent;
      for (const i of accents) {
        ctx.fillRect(
          (i % cols) * CELL,
          Math.floor(i / cols) * CELL,
          CELL,
          CELL,
        );
      }
      if (split < 1) {
        const width = canvas.width / dpr;
        const height = canvas.height / dpr;
        const top = split * height;
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, top, width, height - top);
        ctx.clip();
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, top, width, height - top);
        ctx.drawImage(img, 0, 0, width, height);
        ctx.restore();
      }
    };

    const setSplit = (value: number) => {
      split = Math.min(1, Math.max(0, value));
      divider.style.top = `${split * 100}%`;
      divider.setAttribute(
        "aria-valuenow",
        String(Math.round((1 - split) * 100)),
      );
      draw();
    };

    // Drag the divider (or use arrow keys) to reveal the photo from below
    const onPointerDown = (e: PointerEvent) => {
      e.preventDefault();
      divider.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!divider.hasPointerCapture(e.pointerId)) return;
      const rect = canvas.getBoundingClientRect();
      setSplit((e.clientY - rect.top) / rect.height);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") setSplit(split - 0.05);
      else if (e.key === "ArrowDown") setSplit(split + 0.05);
      else return;
      e.preventDefault();
    };
    const stopClick = (e: MouseEvent) => e.stopPropagation();
    divider.addEventListener("pointerdown", onPointerDown);
    divider.addEventListener("pointermove", onPointerMove);
    divider.addEventListener("keydown", onKeyDown);
    divider.addEventListener("click", stopClick);

    const build = () => {
      if (!img.complete || !img.naturalWidth) return;
      const rect = img.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const width = rect.width;
      const height = rect.height;
      dpr = window.devicePixelRatio || 1;
      canvas.width = base.width = Math.round(width * dpr);
      canvas.height = base.height = Math.round(height * dpr);

      cols = Math.ceil(width / CELL);
      rows = Math.ceil(height / CELL);
      const sample = document.createElement("canvas");
      sample.width = cols;
      sample.height = rows;
      const sctx = sample.getContext("2d");
      const bctx = base.getContext("2d");
      if (!sctx || !bctx) return;
      sctx.drawImage(img, 0, 0, cols, rows);
      const data = sctx.getImageData(0, 0, cols, rows).data;

      isFigure = new Array(cols * rows).fill(false);
      accents = [];
      bctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          if (data[i + 3] < 100) {
            // Background: horizontal sky streaks
            const n = hash(Math.floor(x / 3), y);
            bctx.fillStyle = palette.sky[Math.floor(n * palette.sky.length)];
            bctx.fillRect(x * CELL, y * CELL, CELL, CELL);
            continue;
          }
          isFigure[y * cols + x] = true;
          if (hash(y, x) > 0.97) accents.push(y * cols + x);
          const lum =
            (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255;
          // Jitter a little so tone boundaries break into blocks
          const t = Math.min(
            0.999,
            Math.max(0, lum + (hash(x, y) - 0.5) * 0.12),
          );
          bctx.fillStyle =
            palette.figure[Math.floor(t * palette.figure.length)];
          bctx.fillRect(x * CELL, y * CELL, CELL, CELL);
        }
      }
      draw();
    };

    // Nudge a couple of accent dots to a neighboring cell on the figure
    const drift = () => {
      if (document.hidden || accents.length === 0) return;
      const taken = new Set(accents);
      for (let k = 0; k < 2; k++) {
        const a = Math.floor(Math.random() * accents.length);
        const from = accents[a];
        const x = (from % cols) + Math.floor(Math.random() * 3) - 1;
        const y = Math.floor(from / cols) + Math.floor(Math.random() * 3) - 1;
        const to = y * cols + x;
        if (x < 0 || y < 0 || x >= cols || y >= rows) continue;
        if (!isFigure[to] || taken.has(to)) continue;
        taken.delete(from);
        taken.add(to);
        accents[a] = to;
      }
      draw();
    };

    if (img.complete) build();
    img.addEventListener("load", build);
    const observer = new ResizeObserver(build);
    observer.observe(img);
    const interval = reduceMotion ? 0 : window.setInterval(drift, 140);

    return () => {
      window.clearInterval(interval);
      divider.removeEventListener("pointerdown", onPointerDown);
      divider.removeEventListener("pointermove", onPointerMove);
      divider.removeEventListener("keydown", onKeyDown);
      divider.removeEventListener("click", stopClick);
      img.removeEventListener("load", build);
      observer.disconnect();
    };
  }, []);

  return (
    <PhotoWrapper className={className}>
      <Photo ref={imgRef} src={PHOTO_SRC} alt="Hyewon Lee" />
      <MosaicCanvas ref={canvasRef} aria-hidden="true" />
      <Divider
        ref={dividerRef}
        role="slider"
        tabIndex={0}
        aria-label="Reveal original photo"
        aria-orientation="vertical"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round((1 - INITIAL_SPLIT) * 100)}
      >
        <DividerHandle />
      </Divider>
    </PhotoWrapper>
  );
};

export default ProfilePhoto;

const PhotoWrapper = styled.div`
  position: relative;
  align-self: center;
  width: fit-content;
  max-width: 100%;
`;

// Kept in the layout for sizing; the canvas draws over it
const Photo = styled.img`
  display: block;
  max-width: 100%;
  max-height: inherit;
  width: auto;
  height: auto;
  visibility: hidden;
`;

const MosaicCanvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

// Horizontal rule with a pixel handle on the left; starts near the bottom
// so a strip of the real photo hints at what dragging does
const Divider = styled.div`
  position: absolute;
  top: ${INITIAL_SPLIT * 100}%;
  left: 0;
  right: 0;
  height: 16px;
  margin-top: -8px;
  cursor: ns-resize;
  touch-action: none;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: 7.5px;
    left: 0;
    right: 0;
    height: 1px;
    background: #111111;
  }

  &:focus-visible {
    outline: none;
  }
`;

const DividerHandle = styled.span`
  position: absolute;
  top: 3px;
  left: -5px;
  width: 10px;
  height: 10px;
  background: #111111;

  ${Divider}:hover &,
  ${Divider}:focus-visible & {
    transform: scale(1.2);
  }
`;
