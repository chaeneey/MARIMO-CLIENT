import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const productInfoLayout = style([
  flexGenerator("column"),
  {
    position: "relative",
    width: "100%",
    paddingTop: "14rem",
    paddingBottom: "35rem",
    gap: "40rem",
    backgroundColor: vars.colors.black,
  },
]);

export const productInfoTopContainer = style([
  flexGenerator("column"),
  {
    position: "relative",
    gap: "40rem",
  },
]);

export const productInfoBackgoundImageStyle = style({
  position: "absolute",
  top: 0,
  width: "100%",
  zIndex: 0,
});

export const productInfoMarimoSymbolStyle = style({
  width: "17.3rem",
  height: "17.3rem",
  zIndex: 5,
});

export const productInfoCarouselWrapper = style([
  flexGenerator("column"),
  {
    zIndex: 5,
    gap: "32rem",
  },
]);

export const productInfoBottomCantainer = style([
  flexGenerator("column"),
  {
    gap: "8rem",
    zIndex: 5,
    position: "relative",
    paddingTop: "20rem"
  },
]);

export const productInfoBottomImageStyle = style({
  width: "44rem",
  height: "55rem",
});

export const productInfoTextWrapper = style([
  flexGenerator("column"),
  {
    ...vars.fonts.home04_26_m,
    color: vars.colors.white,
    gap: "0.5rem",
  },
]);
