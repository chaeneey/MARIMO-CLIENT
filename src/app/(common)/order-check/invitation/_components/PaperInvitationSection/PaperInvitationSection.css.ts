import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const paperInviLayout = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "2rem", width: "100%" },
]);

export const paperInviColContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "1.6rem" },
]);

export const paperInviRowContainer = style([
  flexGenerator("row", "flex-start"),
  { gap: "7.5rem" },
]);

export const paperInviTypeText = style({
  ...vars.fonts.caption_04_me,
  color: vars.colors.gray04,
  minWidth: "4.8rem",
});

export const parperInviImageWrapper = style([
  flexGenerator("row"),
  {
    flexWrap: "wrap",
    gap: "1rem",
  },
]);

export const paperInviImageStyle = style({
  width: "14rem",
  height: "14rem",
  backgroundColor: vars.colors.gray05, // 나중에 지울 것
});

export const paperInviTextBoxStyle = style({
  width: "100%",
  backgroundColor: vars.colors.gray01,
  padding: "2rem",
});

export const paperInviTextStyle = style({
  ...vars.fonts.caption_03_14,
  color: vars.colors.gray05,
});
