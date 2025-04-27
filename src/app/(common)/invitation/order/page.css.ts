import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const orderPageLayout = style([
  flexGenerator("column"),
  {
    gap: "2.8rem",
    width: "100%",
    marginTop: "12rem",
    marginBottom: "16rem",
  },
]);

export const titleWrapper = style([
  flexGenerator("row", "space-between"),
  { width: "100%" },
]);

export const titleTextStyle = style([vars.fonts.head02_28]);

export const orderButtonStyle = style({
  width: "fit-content",
});

export const orderBarStyle = style({
  width: "100%",
  height: "0.8rem",
  backgroundColor: vars.colors.black,
});

export const accordionContainer = style({
  width: "100%",
});
