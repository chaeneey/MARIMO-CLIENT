import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

// 참석의사 전달
export const attendContainer = style([
  flexGenerator("row", "flex-start", "flex-start"),
  { gap: "6em", width: "100%" },
]);

export const attendWrapper = style([
  flexGenerator("row", "flex-start"),
  { gap: "1.8rem" },
]);

export const attendTextWrapper = style([
  flexGenerator("row", "flex-start"),
  { gap: "1rem" },
]);

export const attendTextStyle = style({
  ...vars.fonts.body08_18_sb,
  color: vars.colors.gray05,
});

export const attendCheckBoxStyle = style({
  ...vars.fonts.caption_03_14,
  color: vars.colors.gray05,
});
