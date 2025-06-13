import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const orderCheckLayout = style([
  flexGenerator("column"),
  {
    gap: "3.6rem",
    width: "100%",
    paddingTop: "17rem",
  },
]);

export const orderCheckTopSection = style([
  flexGenerator("column"),
  { gap: "1.9rem" },
]);

export const orderCheckTitleStyle = style({
  ...vars.fonts.head02_28,
  color: vars.colors.black,
});

export const orderCheckBarStyle = style({
  width: "37.6rem",
  height: "0.8rem",
  backgroundColor: vars.colors.black,
});

export const orderCheckBottomSection = style([
  flexGenerator("column"),
  { gap: "2rem", width: "37.6rem" },
]);

export const orderCheckInputWrapper = style([
  flexGenerator("column"),
  { gap: "1rem", width: "100%" },
]);

export const orderCheckRadioContainer = style([
  flexGenerator("row", "flex-end"),
  { gap: "2.4rem", width: "100%" },
]);

export const orderCheckRadioWrapper = style([
  flexGenerator(),
  {
    gap: "1.2rem",
  },
]);

export const orderCheckRadioTextStyle = style({
  ...vars.fonts.caption_03_14,
  color: vars.colors.gray05,
});
