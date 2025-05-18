import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const inputTextStyle = style([
  vars.fonts.body08_18_sb,
  { color: vars.colors.gray05, marginTop: "2rem" },
]);

export const inputTitleTextStyle = style({
  ...vars.fonts.body03_20_36,
  color: vars.colors.gray05,
});

// 종이 + 모바일 청첩장 표지 업로드
export const coverContentContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    width: "100%",
    gap: "1.8rem",
  },
]);

export const textWithButtonWrapper = style([
  flexGenerator("row", "flex-start"),
  { gap: "2rem" },
]);

export const urlWrapper = style([
  flexGenerator(),
  {
    gap: "1.6rem",
  },
]);

export const urlTextStyle = style({
  ...vars.fonts.body09_18_sb_narrow,
  color: vars.colors.gray05,
});

// 주의사항 카드 스타일
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
});

export const cautionTextWrapper = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "0.6rem" },
]);

export const cautionTextStyle = style({
  ...vars.fonts.caption_04_me,
  color: vars.colors.gray04,
});
