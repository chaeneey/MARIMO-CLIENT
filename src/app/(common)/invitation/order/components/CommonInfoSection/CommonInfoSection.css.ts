import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const inputTextStyle = style([
  vars.fonts.body08_18_sb,
  { color: vars.colors.gray05, marginTop: "2rem", minWidth: "fit-content" },
]);

export const inputTitleTextStyle = style({
  ...vars.fonts.body03_20_36,
  color: vars.colors.gray05,
  minWidth: "fit-content",
});

// 청첩장 공통정보 입력
export const nameInfoContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "1.9rem",
    width: "100%",
  },
]);

export const nameInfoWrapper = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "1.8rem",
    width: "100%",
  },
]);

export const nameInfoSubTextStyle = style({
  ...vars.fonts.body09_18_sb_narrow,
  color: vars.colors.gray04,
  marginTop: "2rem",
  minWidth: "fit-content",
});

export const nameInfoInputWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  {
    gap: "8.5rem",
    width: "100%",
  },
]);

export const nameInfoInputWithCheckbox = style([
  flexGenerator("row", "flex-start"),
  {
    gap: "2.9rem",
    width: "100%",
  },
]);

export const nameInfoCheckboxWrapper = style([
  flexGenerator("row", "flex-start"),
  {
    gap: "1.9rem",
  },
]);

export const nameInfoCheckboxStyle = style([
  flexGenerator("row", "flex-start"),
  {
    gap: "1rem",
  },
]);

export const nameInfoCheckboxTextStyle = style({
  ...vars.fonts.caption_03_14,
  color: vars.colors.gray05,
  minWidth: "fit-content",
});

export const cautionContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    border: `1px solid ${vars.colors.gray03}`,
    width: "100%",
    padding: "2.8rem 5.7rem",
    gap: "1.5rem",
  },
]);

export const cautionTitleStyle = style({
  ...vars.fonts.body10_18_b,
  color: vars.colors.gray06,
  minWidth: "fit-content",
});

export const cautionTextWrapper = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "0.6rem" },
]);

export const cautionTextStyle = style({
  ...vars.fonts.caption_04_me,
  color: vars.colors.gray04,
  minWidth: "fit-content",
});

export const dateContainer = style([
  flexGenerator("row", "flex-start", "flex-start"),
  {
    gap: "6.7rem",
    width: "100%",
  },
]);

export const dateInputWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  { gap: "0.8rem", width: "100%" },
]);

export const adressWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  {
    gap: "9.9rem",
    width: "100%",
  },
]);

// 주소 입력
export const customerAdressWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  {
    gap: "8.9rem",
  },
]);

export const customerAdressInputWrapper = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "0.8rem",
    width: "100%",
  },
]);

export const customerAdressSearchWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  {
    gap: "0.7rem",
    width: "100%",
  },
]);
