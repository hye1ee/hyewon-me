import { useEffect, useRef } from "react";
import styled from "styled-components";

const BLUR = 7; // out-of-focus blur in CSS px
const DOT = "#111111";

interface DotWordmarkProps {
  text: string;
  fontSize?: number;
  className?: string;
}

// Name drawn as a dot grid that drifts in and out of focus.
// Hovering pulls the focus to the cursor.
const DotWordmark = ({ text, fontSize = 34, className }: DotWordmarkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const GAP = Math.max(1.6, fontSize / 11); // dot grid spacing in CSS px
    const font = `700 ${fontSize}px "Inter Tight", sans-serif`;
    const pad = BLUR * 2;
    let cols = 0;
    let rows = 0;
    let sharp: Float32Array = new Float32Array(0);
    let blurred: Float32Array = new Float32Array(0);
    let width = 0;
    let height = 0;
    let frame = 0;
    let pointerX: number | null = null;

    // Coverage of the text per grid cell, optionally blurred
    const sampleCoverage = (blur: number) => {
      const scale = 4;
      const big = document.createElement("canvas");
      big.width = width * scale;
      big.height = height * scale;
      const bctx = big.getContext("2d");
      if (!bctx) return new Float32Array(0);
      bctx.scale(scale, scale);
      bctx.filter = blur ? `blur(${blur}px)` : "none";
      bctx.font = font;
      bctx.textBaseline = "middle";
      bctx.fillText(text, pad, height / 2);

      const small = document.createElement("canvas");
      small.width = cols;
      small.height = rows;
      const sctx = small.getContext("2d");
      if (!sctx) return new Float32Array(0);
      sctx.drawImage(big, 0, 0, cols, rows);
      const data = sctx.getImageData(0, 0, cols, rows).data;
      const out = new Float32Array(cols * rows);
      for (let i = 0; i < out.length; i++) out[i] = data[i * 4 + 3] / 255;
      return out;
    };

    const build = () => {
      ctx.font = font;
      const metrics = ctx.measureText(text);
      width = Math.ceil(metrics.width + pad * 2);
      height = Math.ceil(fontSize * 1.1 + pad);
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / GAP);
      rows = Math.ceil(height / GAP);
      sharp = sampleCoverage(0);
      blurred = sampleCoverage(BLUR);
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = DOT;
      // Focus band drifting across the name, or following the cursor
      const focusX =
        pointerX ?? width * (0.5 + 0.45 * Math.sin(time / 2200));
      const band = width * 0.28;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const cx = x * GAP + GAP / 2;
          const focus = Math.max(0, 1 - Math.abs(cx - focusX) / band);
          const i = y * cols + x;
          const cover = sharp[i] * focus + blurred[i] * (1 - focus);
          if (cover < 0.06) continue;
          const r = (GAP / 2) * Math.min(1, Math.sqrt(cover) * 1.05);
          ctx.beginPath();
          ctx.arc(cx, y * GAP + GAP / 2, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = (time: number) => {
      draw(time);
      frame = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      pointerX = e.clientX - canvas.getBoundingClientRect().left;
      if (reduceMotion) draw(0);
    };
    const onLeave = () => {
      pointerX = null;
      if (reduceMotion) draw(0);
    };

    let cancelled = false;
    document.fonts.ready.then(() => {
      if (cancelled) return;
      build();
      if (reduceMotion) draw(0);
      else frame = requestAnimationFrame(loop);
    });
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [text, fontSize]);

  return (
    <Wrapper className={className}>
      <canvas ref={canvasRef} aria-hidden="true" />
      <VisuallyHidden>{text}</VisuallyHidden>
    </Wrapper>
  );
};

export default DotWordmark;

const Wrapper = styled.div`
  position: relative;
  line-height: 0;

  canvas {
    display: block;
    margin: -${BLUR}px -${BLUR * 2}px;
  }
`;

const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`;
