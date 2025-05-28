import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const productInfoSectionLayout = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "1.8rem", width: "100%" },
]);

export const productInfoTopContainer = style([
  flexGenerator("row", "flex-start", "flex-start"),
  { gap: "2.7rem", width: "100%" },
]);

export const productImgStyle = style({
  width: "9.4rem",
  height: "12.5rem",
  backgroundColor: vars.colors.gray05,
});

export const productTextContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "2.7rem" },
]);

export const productTitleStyle = style({
  ...vars.fonts.body09_18_sb_narrow,
  color: vars.colors.black,
});

export const productSubTextContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "1rem" },
]);

export const productSubTextWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  { gap: "1.2rem" },
]);

export const productSubTextStyle = style({
  ...vars.fonts.caption_04_me,
  color: vars.colors.gray04,
});

export const productInfoBottomContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "2rem",
    width: "100%",
    backgroundColor: vars.colors.gray01,
    padding: "2rem 1.5rem",
  },
]);

export const productInfoOptionWrapper = style([
  flexGenerator("row", "flex-start"),
  { gap: "5rem" },
]);

export const optionTextStyle = style({
  ...vars.fonts.caption_03_14,
  minWidth: "7.5rem",
  color: vars.colors.gray05,
});

export const optionSubTextStyle = style({
  ...vars.fonts.caption_04_me,
  color: vars.colors.gray04,
});

export const optionBarStyle = style({
  width: "100%",
  height: "0.1rem",
  backgroundColor: vars.colors.gray02,
});
