import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

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
