import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const receiptContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "1.8rem",
    width: "100%",
  },
]);

export const receiptLayout = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    padding: "2rem 2.5rem 2.5rem 2.5rem",
    gap: "2rem",
    backgroundColor: vars.colors.white,
    width: "100%",
  },
]);

export const receiptTopSection = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "1.9rem", width: "100%" },
]);

export const receiptTitleStyle = style({
  ...vars.fonts.body10_18_b,
  color: vars.colors.black,
});

export const receiptBarStyle = style({
  backgroundColor: vars.colors.black,
  width: "100%",
  height: "0.4rem",
});

export const receiptThinBarStyle = style({
  backgroundColor: vars.colors.gray01,
  width: "100%",
  height: "0.2rem",
});

export const receiptTypeTextStyle = style({
  ...vars.fonts.caption_04_me,
  color: vars.colors.gray04,
});

export const receiptTextStyle = style({
  ...vars.fonts.caption_03_14,
  color: vars.colors.gray05,
});

export const receiptTotalTextStyle = style({
  ...vars.fonts.body10_18_b,
  color: vars.colors.gray07,
});

export const receiptBottomSection = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "3.6rem", width: "100%" },
]);

export const receiptRowContainer = style([
  flexGenerator("row", "space-between"),
  { width: "100%" },
]);

export const buttonWrapper = style({
  width: "100%",
});
