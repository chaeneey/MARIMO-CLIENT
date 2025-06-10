import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const marimoInfoTopContainer = style({
  position: "relative",
});

export const homeThumbnailImageStyle = style({
  width: "100%",
  height: "100vh",
  objectFit: "cover",
});

export const homeSubImageStyle = style({
  position: "absolute",
  bottom: "15rem",
  left: "15rem",
});

export const homeMainTextWrapper = style([
  flexGenerator("column", "center", "flex-end"),
  {
    position: "absolute",
    bottom: "13rem",
    right: "13rem",
  },
]);

export const homeMainTextStyle = style({
  ...vars.fonts.head01_32,
  color: vars.colors.gray02,
});

export const marimoInfoBottomContainer = style([
  flexGenerator("column"),
  {
    width: "100%",
    height: "60rem",
    backgroundColor: vars.colors.black,
    gap: "2rem",
  },
]);

export const homeSubBoldTextStyle = style({
  ...vars.fonts.head02_28,
  color: vars.colors.white,
});

export const homeSubMediumTextStyle = style({
  ...vars.fonts.head03_28_m,
  color: vars.colors.white,
});
