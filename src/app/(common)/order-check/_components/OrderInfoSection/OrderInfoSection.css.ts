import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const orderInfoLayout = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "2.5rem",
    width: "100%",
  },
]);

export const orderInfoTextWrapper = style([
  flexGenerator("row", "flex-start"),
  { gap: "6rem", width: "100%" },
]);

export const orderInfoTextStyle = style({
  ...vars.fonts.caption_04_me,
  color: vars.colors.gray04,
  width: "6.3rem",
});

export const orderInfoSubTextStyle = style({
  ...vars.fonts.caption_03_14,
  color: vars.colors.gray05,
});
