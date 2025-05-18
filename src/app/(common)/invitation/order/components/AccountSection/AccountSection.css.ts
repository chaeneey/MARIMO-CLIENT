import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const accountSectionLayout = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "3.6rem" },
]);

export const accountSectionContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "1.8rem" },
]);

export const inputTitleWrapper = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "0.4rem" },
]);

export const inputTitleTextStyle = style({
  ...vars.fonts.body03_20_36,
  color: vars.colors.gray05,
});

export const inputInfoTextStyle = style({
  ...vars.fonts.caption_04_me,
  color: vars.colors.gray04,
});

export const inputColumnWrapper = style([
  flexGenerator("column", "center", "flex-end"),
  {
    gap: "0.8rem",
  },
]);

export const inputRowWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  {
    gap: "5.1rem",
  },
]);

export const inputWrapper = style([
  flexGenerator(),
  {
    gap: "1rem",
  },
]);

export const accountSubTextStyle = style({
  ...vars.fonts.body09_18_sb_narrow,
  color: vars.colors.gray04,
  marginTop: "2rem",
});
