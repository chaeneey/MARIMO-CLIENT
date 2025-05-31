import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const productInfoLayout = style([
  flexGenerator("row", "flex-start"),
  { gap: "2.6rem" },
]);

export const productInfoImage = style({
  width: "10rem",
  height: "10rem",
  backgroundColor: vars.colors.gray05,
});

export const productInfoTextContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "2.7rem" },
]);

export const productInfoTitleStyle = style({
  ...vars.fonts.body09_18_sb_narrow,
  color: vars.colors.black,
});

export const productInfoTextWrapper = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "1rem" },
]);

export const productInfoTextStyle = style({
  ...vars.fonts.caption_04_me,
  color: vars.colors.gray04,
});
