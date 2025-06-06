import { style } from "@vanilla-extract/css";

import { vars } from "@styles/theme.css";

export const videoPlayerLayout = style({
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  backgroundColor: vars.colors.black,
  position: "relative",
});

export const videoStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const videoPlayerSoundIcon = style({
  position: "absolute",
  bottom: "3.8rem",
  right: "6rem",
  width: "6.2rem",
  height: "6.2rem",
});
