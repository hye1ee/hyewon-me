import { useEffect, useRef } from "react";
import styled from "styled-components";

const PHOTO_SRC = "/img/profile.png";
const CELL = 4; // halftone grid spacing in CSS px
const DOT = "#111111";
const FINDER = 0.36; // clear window size relative to photo width
const FOLLOW = 0.25; // how quickly the window catches up to the cursor

// Profile photo drawn as halftone dots. Hovering opens a square window
// that follows the cursor and shows the real photo inside.
const ProfilePhoto = ({ className }: { className?: string }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dotLayer = document.createElement("canvas");
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    const finder = { x: 0, y: 0, tx: 0, ty: 0, visible: false };

    const buildDotLayer = () => {
      if (!img.complete || !img.naturalWidth) return;
      const rect = img.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      width = rect.width;
      height = rect.height;
      dpr = window.devicePixelRatio || 1;
      canvas.width = dotLayer.width = Math.round(width * dpr);
      canvas.height = dotLayer.height = Math.round(height * dpr);

      const cols = Math.ceil(width / CELL);
      const rows = Math.ceil(height / CELL);
      const sample = document.createElement("canvas");
      sample.width = cols;
      sample.height = rows;
      const sctx = sample.getContext("2d");
      const dctx = dotLayer.getContext("2d");
      if (!sctx || !dctx) return;
      sctx.drawImage(img, 0, 0, cols, rows);
      const data = sctx.getImageData(0, 0, cols, rows).data;

      dctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dctx.clearRect(0, 0, width, height);
      dctx.fillStyle = DOT;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          const alpha = data[i + 3] / 255;
          if (alpha < 0.15) continue;
          const lum =
            (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) /
            255;
          // Darker areas get bigger dots; keep a faint dot so light areas still read
          const r = (CELL / 2) * Math.max(0.18, Math.sqrt(1 - lum)) * alpha;
          dctx.beginPath();
          dctx.arc(x * CELL + CELL / 2, y * CELL + CELL / 2, r, 0, Math.PI * 2);
          dctx.fill();
        }
      }
      draw();
    };

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(dotLayer, 0, 0, width, height);
      if (!finder.visible) return;
      const size = width * FINDER;
      const sx = finder.x - size / 2;
      const sy = finder.y - size / 2;
      ctx.save();
      ctx.beginPath();
      ctx.rect(sx, sy, size, size);
      ctx.clip();
      ctx.clearRect(sx, sy, size, size);
      ctx.drawImage(img, 0, 0, width, height);
      ctx.restore();
    };

    const tick = () => {
      finder.x += (finder.tx - finder.x) * FOLLOW;
      finder.y += (finder.ty - finder.y) * FOLLOW;
      draw();
      const moving =
        Math.abs(finder.tx - finder.x) > 0.3 ||
        Math.abs(finder.ty - finder.y) > 0.3;
      frame = finder.visible && moving ? requestAnimationFrame(tick) : 0;
    };

    const toLocal = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onEnter = (e: PointerEvent) => {
      const p = toLocal(e);
      finder.x = finder.tx = p.x;
      finder.y = finder.ty = p.y;
      finder.visible = true;
      draw();
    };
    const onMove = (e: PointerEvent) => {
      const p = toLocal(e);
      finder.tx = p.x;
      finder.ty = p.y;
      finder.visible = true;
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      finder.visible = false;
      cancelAnimationFrame(frame);
      frame = 0;
      draw();
    };

    if (img.complete) buildDotLayer();
    img.addEventListener("load", buildDotLayer);
    const observer = new ResizeObserver(buildDotLayer);
    observer.observe(img);
    canvas.addEventListener("pointerenter", onEnter);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      img.removeEventListener("load", buildDotLayer);
      observer.disconnect();
      canvas.removeEventListener("pointerenter", onEnter);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <PhotoWrapper className={className}>
      <Photo ref={imgRef} src={PHOTO_SRC} alt="Hyewon Lee" />
      <DotCanvas ref={canvasRef} aria-hidden="true" />
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

const DotCanvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  touch-action: pan-y;
`;
