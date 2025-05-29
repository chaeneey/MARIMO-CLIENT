import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const inputTitleTextStyle = style({
  ...vars.fonts.body03_20_36,
  color: vars.colors.gray05,
});

// 기타 요청사항
export const memoContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "1.8rem", width: "100%" },
]);
