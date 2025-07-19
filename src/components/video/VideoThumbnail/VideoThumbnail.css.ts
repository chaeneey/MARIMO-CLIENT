import { style } from "@vanilla-extract/css";

export const thumbnailContainer = style({
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  cursor: "pointer",
});

export const thumbnailImage = style({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "opacity 0.3s ease",
});

export const thubnailVideo = style({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "opacity 0.3s ease",
  pointerEvents: "none",
});
