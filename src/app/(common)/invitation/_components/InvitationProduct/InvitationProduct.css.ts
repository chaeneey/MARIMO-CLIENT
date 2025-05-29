import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const articleWrapperStyle = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    width: "26rem",
    gap: "1.2rem",
  },
]);

export const imageSection = style({
  width: "100%",
  height: "35.6rem",
});

export const discriptionBox = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    width: "100%",
    gap: "0.8rem",
  },
]);

export const titleStyle = style([
  vars.fonts.body08_18_sb,
  {
    color: vars.colors.gray06,
  },
]);

export const detailWrapper = style([
  flexGenerator(),
  {
    gap: "1.1rem",
  },
]);

export const discountRateStyle = style([
  vars.fonts.body08_18_sb,
  {
    color: vars.colors.lime07,
  },
]);

export const body08BlackStyle = style([
  vars.fonts.body08_18_sb,
  {
    color: vars.colors.black,
  },
]);

export const dividerStyle = style({
  width: "0.2rem",
  height: "2rem",
  backgroundColor: vars.colors.gray06,
});
