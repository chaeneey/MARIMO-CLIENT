import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const conceptSectionLayout = style([
  flexGenerator("column"),
  {
    backgroundColor: vars.colors.black,
    paddingTop: "50rem",
    paddingBottom: "35rem",
    gap: "20rem",
  },
]);

export const conceptSectionTopContainer = style([
  flexGenerator("column"),
  { gap: "10rem" },
]);

export const conceptSectionMainTextStyle = style({
  ...vars.fonts.home01_32_el,
  color: vars.colors.white,
});

export const conceptSectionImageWrapper = style([
  flexGenerator(),
  {
    width: "81rem",
    flexWrap: "wrap",
  },
]);

export const conceptSectionBottomContainer = style([
  flexGenerator("column"),
  {
    ...vars.fonts.home04_26_m,
    color: vars.colors.white,
  },
]);
