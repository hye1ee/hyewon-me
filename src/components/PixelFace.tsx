import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

const GRID = 14;
const SLEEP_MS = 5000; // idle time before the face dozes off

type Mood =
  | "neutral"
  | "smile"
  | "happy"
  | "surprised"
  | "wink"
  | "curiousLeft"
  | "curiousRight"
  | "sleepy";
type Look = { dx: -1 | 0 | 1; dy: -1 | 0 | 1 };
type Pixel = [number, number]; // [col, row]

const range = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => from + i);
const row = (from: number, to: number, r: number) =>
  range(from, to).map((c): Pixel => [c, r]);

// --- Eyes --------------------------------------------------------------

// Square eye with a pupil that follows the cursor
const openEye = (left: number, look: Look): Pixel[] => [
  ...row(left, left + 4, 4),
  ...row(left, left + 4, 8),
  ...range(5, 7).flatMap((r): Pixel[] => [
    [left, r],
    [left + 4, r],
  ]),
  [left + 2 + look.dx, 6 + look.dy],
];

// Smiling eye: ^
const happyEye = (left: number): Pixel[] => [
  [left, 7],
  [left + 1, 6],
  [left + 2, 5],
  [left + 3, 6],
  [left + 4, 7],
];

const closedEye = (left: number): Pixel[] => row(left, left + 4, 6);

// --- Brows: each brow has an outer half and an inner half -------------

type BrowRows = { outer: number; inner: number };
const BROWS: Record<"flat" | "raised" | "low", BrowRows> = {
  flat: { outer: 2, inner: 2 },
  raised: { outer: 1, inner: 1 },
  low: { outer: 3, inner: 3 },
};

const leftBrow = ({ outer, inner }: BrowRows): Pixel[] => [
  ...row(1, 2, outer),
  ...row(3, 4, inner),
];
const rightBrow = ({ outer, inner }: BrowRows): Pixel[] => [
  ...row(9, 10, inner),
  ...row(11, 12, outer),
];

// --- Mouths ------------------------------------------------------------

const MOUTHS = {
  flat: row(5, 8, 11),
  smile: [[3, 10], [10, 10], ...row(4, 9, 11)] as Pixel[],
  grin: [[3, 10], [10, 10], ...row(3, 10, 11), ...row(5, 8, 12)] as Pixel[],
  open: [
    [6, 10],
    [7, 10],
    [5, 11],
    [8, 11],
    [6, 12],
    [7, 12],
  ] as Pixel[],
  smirkLeft: [[4, 10], ...row(5, 9, 11)] as Pixel[],
  smirkRight: [...row(4, 8, 11), [9, 10]] as Pixel[],
  tiny: row(6, 7, 11),
};

type Face = {
  brows: [BrowRows, BrowRows];
  eyes: "open" | "happy" | "closed" | "wink";
  mouth: keyof typeof MOUTHS;
};

const FACES: Record<Mood, Face> = {
  neutral: { brows: [BROWS.flat, BROWS.flat], eyes: "open", mouth: "flat" },
  smile: { brows: [BROWS.flat, BROWS.flat], eyes: "open", mouth: "smile" },
  happy: { brows: [BROWS.raised, BROWS.raised], eyes: "happy", mouth: "grin" },
  surprised: {
    brows: [BROWS.raised, BROWS.raised],
    eyes: "open",
    mouth: "open",
  },
  wink: { brows: [BROWS.flat, BROWS.raised], eyes: "wink", mouth: "smile" },
  curiousLeft: {
    brows: [BROWS.raised, BROWS.flat],
    eyes: "open",
    mouth: "smirkLeft",
  },
  curiousRight: {
    brows: [BROWS.flat, BROWS.raised],
    eyes: "open",
    mouth: "smirkRight",
  },
  sleepy: { brows: [BROWS.low, BROWS.low], eyes: "closed", mouth: "tiny" },
};

const facePixels = (mood: Mood, look: Look): Pixel[] => {
  const face = FACES[mood];
  const eyes =
    face.eyes === "happy"
      ? [...happyEye(1), ...happyEye(8)]
      : face.eyes === "wink"
        ? [...openEye(1, look), ...happyEye(8)]
        : face.eyes === "closed"
          ? [...closedEye(1), ...closedEye(8)]
          : [...openEye(1, look), ...openEye(8, look)];
  return [
    ...leftBrow(face.brows[0]),
    ...rightBrow(face.brows[1]),
    ...eyes,
    [6, 8],
    [7, 9],
    ...MOUTHS[face.mouth],
  ];
};

const sign = (v: number, dead: number): -1 | 0 | 1 =>
  v > dead ? 1 : v < -dead ? -1 : 0;

// Pick an expression from where the cursor is relative to the face
const moodFor = (vx: number, vy: number, size: number): Mood => {
  const dist = Math.hypot(vx, vy);
  const vertical = Math.abs(vy) > Math.abs(vx);
  if (dist < size * 0.7) return "happy";
  if (vertical && vy < -size) return "surprised";
  if (dist < 220) return "smile";
  if (vertical && vy > 220) return "wink";
  if (!vertical && dist < 700) return vx < 0 ? "curiousLeft" : "curiousRight";
  return "neutral";
};

// Pixel face that watches the cursor: it smiles up close, gets curious from
// the side, looks surprised from above, winks from below and dozes off when
// idle.
const PixelFace = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mood, setMood] = useState<Mood>("neutral");
  const [look, setLook] = useState<Look>({ dx: 0, dy: 0 });

  useEffect(() => {
    let frame = 0;
    let idle = 0;
    let last = { x: 0, y: 0 };

    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vx = last.x - (rect.left + rect.width / 2);
      const vy = last.y - (rect.top + rect.height / 2);
      setLook((prev) => {
        const next = { dx: sign(vx, 20), dy: sign(vy, 20) };
        return prev.dx === next.dx && prev.dy === next.dy ? prev : next;
      });
      setMood(moodFor(vx, vy, rect.width));
    };

    const onMove = (e: PointerEvent) => {
      last = { x: e.clientX, y: e.clientY };
      if (!frame) frame = requestAnimationFrame(update);
      window.clearTimeout(idle);
      idle = window.setTimeout(() => setMood("sleepy"), SLEEP_MS);
    };

    idle = window.setTimeout(() => setMood("sleepy"), SLEEP_MS);
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(idle);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  const pixels = useMemo(() => facePixels(mood, look), [mood, look]);

  return (
    <Tile ref={ref} className={className} aria-hidden="true">
      <svg viewBox={`0 0 ${GRID} ${GRID}`} shapeRendering="crispEdges">
        {pixels.map(([c, r]) => (
          <rect key={`${c}-${r}`} x={c} y={r} width={1} height={1} />
        ))}
      </svg>
    </Tile>
  );
};

export default PixelFace;

const Tile = styled.div`
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  padding: 4px;
  box-sizing: border-box;

  svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: #111111;
  }

  @media (width <= 1024px) {
    width: 46px;
    height: 46px;
  }
`;
