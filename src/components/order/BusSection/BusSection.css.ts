import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const inputWithErrorMessage = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { width: "100%" },
]);

export const inputErrorTextStyle = style([
  vars.fonts.caption_04_me,
  {
    color: vars.colors.alert01,
  },
]);

export const inputTextStyle = style([
  vars.fonts.body08_18_sb,
  { color: vars.colors.gray05, marginTop: "2rem", minWidth: "fit-content" },
]);

// 전세버스
export const busContainer = style([
  flexGenerator("column", "flex-start", "flex-end"),
  { gap: "0.8rem", width: "100%" },
]);

export const busInputWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  {
    gap: "3.2rem",
    width: "100%",
  },
]);

export const timeWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  { gap: "0.8rem", width: "100%" },
]);

export const selectedTimeContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "0.8rem",
    width: "100%",
  },
]);

export const selectedTimeWrapper = style([
  flexGenerator("row", "space-between"),
  {
    width: "100%",
    maxWidth: "32.8rem",
    padding: "1.9rem 2.7rem",
    border: `${vars.colors.black} solid 1px`,
    borderRadius: "1px",
    backgroundColor: vars.colors.white,
  },
]);

export const selectedTimeTextStyle = style({
  ...vars.fonts.caption_04_me,
  color: vars.colors.black,
});
