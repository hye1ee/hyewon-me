import { useEffect, useRef } from "react";
import styled from "styled-components";

const CELL = 22; // grid size in CSS px
const BG = "#2a2a2a"; // charcoal
const COLORS = [
  "#ffe14d",
  "#ffc21a",
  "#ff9a1f",
  "#ff6a1f",
  "#4caf50",
  "#b8e04a",
  "#fbf6e6",
];
// Cool theme that cells switch to when the cursor touches them
const TOUCH_COLORS = [
  "#3d6bff",
  "#7aa2ff",
  "#9b6bff",
  "#c9a8ff",
  "#ff5fa2",
  "#5fd3ff",
];
const SHAPES = [
  "circle",
  "square",
  "plus",
  "ring",
  "vstripes",
  "hstripes",
  "dot",
] as const;
type Shape = (typeof SHAPES)[number];

type Cell = {
  shape: Shape;
  color: string;
  accent: string;
  born: number;
  life: number;
};

const GROW_MS = 350;
const pick = <T,>(list: readonly T[]) =>
  list[Math.floor(Math.random() * list.length)];

// Generative grid: shapes pop in and out on a black field, denser toward
// the bottom.
const DoodleBanner = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let cols = 0;
    let rows = 0;
    let cells: (Cell | null)[] = [];
    let frame = 0;
    let visible = true;
    let lastSpawn = 0;

    // Chance a cell is filled, rising toward the bottom
    const density = (y: number) => 0.08 + 0.8 * Math.pow(y / rows, 1.6);

    const spawn = (now: number, age = 0, palette = COLORS): Cell => {
      const color = pick(palette);
      let accent = pick(palette);
      while (accent === color) accent = pick(palette);
      return {
        shape: pick(SHAPES),
        color,
        accent,
        born: now - age,
        life: 2500 + Math.random() * 5000,
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(rect.width / CELL);
      rows = Math.ceil(rect.height / CELL);
      const now = performance.now();
      cells = Array.from({ length: cols * rows }, (_, i) => {
        const y = Math.floor(i / cols);
        if (Math.random() > density(y)) return null;
        const cell = spawn(now);
        // Start mid-life so the banner is already full on load
        cell.born = now - Math.random() * cell.life;
        return cell;
      });
      draw(now);
    };

    const drawShape = (cell: Cell, cx: number, cy: number, s: number) => {
      const r = (CELL / 2) * s;
      ctx.fillStyle = cell.color;
      switch (cell.shape) {
        case "circle":
          ctx.beginPath();
          ctx.arc(cx, cy, r * 0.95, 0, Math.PI * 2);
          ctx.fill();
          break;
        case "square":
          ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
          break;
        case "plus": {
          const w = r * 0.5;
          ctx.fillRect(cx - w / 2, cy - r, w, r * 2);
          ctx.fillRect(cx - r, cy - w / 2, r * 2, w);
          break;
        }
        case "ring":
          ctx.beginPath();
          ctx.arc(cx, cy, r * 0.95, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = cell.accent;
          ctx.beginPath();
          ctx.arc(cx, cy, r * 0.45, 0, Math.PI * 2);
          ctx.fill();
          break;
        case "vstripes":
          for (let i = 0; i < 4; i++) {
            ctx.fillRect(
              cx - r + i * (r / 2) + r * 0.1,
              cy - r,
              r * 0.28,
              r * 2,
            );
          }
          break;
        case "hstripes":
          ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
          ctx.fillStyle = cell.accent;
          for (let i = 0; i < 3; i++) {
            ctx.fillRect(
              cx - r,
              cy - r + (i + 0.5) * (r / 1.5),
              r * 2,
              r * 0.25,
            );
          }
          break;
        case "dot":
          ctx.beginPath();
          ctx.arc(cx, cy, r * 0.4, 0, Math.PI * 2);
          ctx.fill();
          break;
      }
    };

    const draw = (now: number) => {
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, cols * CELL, rows * CELL);
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        if (!cell) continue;
        const age = now - cell.born;
        const left = cell.life - age;
        // Pop in, hold, pop out
        const s = reduceMotion
          ? 1
          : Math.max(0, Math.min(1, age / GROW_MS, left / GROW_MS));
        if (s <= 0) continue;
        const x = i % cols;
        const y = Math.floor(i / cols);
        drawShape(cell, x * CELL + CELL / 2, y * CELL + CELL / 2, s);
      }
    };

    const tick = (now: number) => {
      // Retire finished cells and spawn new ones
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        if (cell && now - cell.born > cell.life) cells[i] = null;
      }
      if (now - lastSpawn > 40) {
        // Scale attempts with elapsed time so slow frames still refill
        const attempts = Math.min(
          400,
          Math.round(((now - lastSpawn) / 40) * 6),
        );
        lastSpawn = now;
        for (let k = 0; k < attempts; k++) {
          const i = Math.floor(Math.random() * cells.length);
          const y = Math.floor(i / cols);
          if (!cells[i] && Math.random() < density(y)) cells[i] = spawn(now);
        }
      }
      draw(now);
      frame = visible ? requestAnimationFrame(tick) : 0;
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    // Cells near the cursor switch to the cool theme (empty ones sprout a shape)
    let lastCell = -1;
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = Math.floor((e.clientX - rect.left) / CELL);
      const cy = Math.floor((e.clientY - rect.top) / CELL);
      const index = cy * cols + cx;
      if (index === lastCell) return;
      lastCell = index;
      const now = performance.now();
      for (let y = cy - 1; y <= cy + 1; y++) {
        for (let x = cx - 1; x <= cx + 1; x++) {
          if (x < 0 || y < 0 || x >= cols || y >= rows) continue;
          const isCenter = x === cx && y === cy;
          if (!isCenter && Math.random() < 0.5) continue;
          const i = y * cols + x;
          const cell = cells[i];
          if (cell) {
            cell.color = pick(TOUCH_COLORS);
            let accent = pick(TOUCH_COLORS);
            while (accent === cell.color) accent = pick(TOUCH_COLORS);
            cell.accent = accent;
            // Keep it around a little longer once touched
            cell.life = Math.max(cell.life, now - cell.born + 1500);
          } else {
            cells[i] = spawn(now, 0, TOUCH_COLORS);
          }
        }
      }
      if (reduceMotion) draw(now);
    };
    canvas.addEventListener("pointermove", onMove);

    // Only animate while the banner is on screen
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !frame && !reduceMotion) {
        frame = requestAnimationFrame(tick);
      }
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      io.disconnect();
      canvas.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <Banner aria-hidden="true">
      <canvas ref={canvasRef} />
    </Banner>
  );
};

export default DoodleBanner;

const Banner = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  background: ${BG};

  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
