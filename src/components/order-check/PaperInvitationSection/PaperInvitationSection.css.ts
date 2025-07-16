import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const paperInviLayout = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "2rem", width: "100%" },
]);

export const paperInviColContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "1.6rem", width: "100%" },
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

export const receptionWrapper = style([
  flexGenerator("row"),
  {
    gap: "1.8rem",
  },
]);
