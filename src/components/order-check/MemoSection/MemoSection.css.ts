import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const MemoSectionLayout = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "1.3rem", width: "100%" },
]);

export const MemoWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  { gap: "7.3rem", width: "100%" },
]);

export const MemoTextStyle = style({
  ...vars.fonts.caption_04_me,
  color: vars.colors.gray04,
  minWidth: "fit-content",
});

export const MemoSubTextStyle = style({
  ...vars.fonts.caption_03_14,
  color: vars.colors.gray05,
});

export const MemoStyle = style({
  backgroundColor: vars.colors.gray01,
  padding: "1rem",
  width: "100%",
});
