import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

// 구조잡기
export const mobileColContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "2rem" },
]);

export const mobileRowContainer = style([
  flexGenerator("row", "flex-start"),
  { gap: "4rem" },
]);

export const mobileColWrapper = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "1rem" },
]);

export const mobileRowWrapper = style([
  flexGenerator("row", "flex-start"),
  { gap: "10rem" },
]);

export const movileRowNarrowWrapper = style([
  flexGenerator("row", "flex-start"),
  { gap: "1rem" },
]);

// 폰트 및 꾸며야 하는 것들
export const mobileInviTitleStyle = style({
  ...vars.fonts.body09_18_sb_narrow,
  color: vars.colors.gray05,
  minWidth: "10rem",
});

export const mobileInviTypeTextStyle = style({
  ...vars.fonts.caption_04_me,
  color: vars.colors.gray04,
  minWidth: "3.6rem",
});

export const mobileInviTextStyle = style({
  ...vars.fonts.caption_03_14,
  color: vars.colors.gray05,
});

export const mobileInviImageWrapper = style([
  flexGenerator("row"),
  {
    flexWrap: "wrap",
    gap: "1rem",
  },
]);

export const mobileInviImageStyle = style({
  width: "14rem",
  height: "14rem",
  backgroundColor: vars.colors.gray05, // 나중에 지울 것
});

export const mobileInviTextBoxStyle = style({
  width: "100%",
  backgroundColor: vars.colors.gray01,
  padding: "2rem",
});

export const mobileInviBarStyle = style({
  width: "100%",
  height: "0.4rem",
  margin: "2.5rem 0",
  backgroundColor: vars.colors.gray01,
});
