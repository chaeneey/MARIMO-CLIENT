import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const bannerSectionStyle = style({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "48rem",
});

export const imageStyle = style({
  width: "100%",
  height: "100%",
});

export const progressBarContainer = style([
  flexGenerator("row", "center", "flex-end"),
  {
    position: "absolute",
    bottom: "5.55rem",
    left: "50%",
    transform: "translateX(-50%)",
    width: "54.7rem",
    height: "2px",
  },
]);

export const entireBar = style({
  position: "relative",
  width: "100%",
  height: "0.5px",
  backgroundColor: vars.colors.gray04,
});

export const presentBar = style({
  position: "absolute",
  top: "-1.5px",
  left: "0",
  width: "33.3333%",
  height: "2px",
  backgroundColor: vars.colors.gray03,
  transition: "transform 0.6s ease-in-out",
});
