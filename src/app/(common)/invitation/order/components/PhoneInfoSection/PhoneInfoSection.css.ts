import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const inputTitleTextStyle = style({
  ...vars.fonts.body03_20_36,
  color: vars.colors.gray05,
  minWidth: "fit-content",
});

// 전화 걸기
export const phoneNumberContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "1.9rem",
    width: "100%",
  },
]);

export const phoneNumberWrapper = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "1.8rem",
    width: "100%",
  },
]);

export const phoneNumberInputWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  {
    gap: "8.5rem",
    width: "100%",
  },
]);

export const phoneNumberSubTextStyle = style({
  ...vars.fonts.body09_18_sb_narrow,
  color: vars.colors.gray04,
  marginTop: "2rem",
  minWidth: "fit-content",
});
