import { style } from "@vanilla-extract/css";

export const imageWrapperStyle = style({
  position: "relative",
  width: "100%",
  height: "100%",
});

export const imageStyle = style({
  objectFit: "cover",
  display: "block"
});
