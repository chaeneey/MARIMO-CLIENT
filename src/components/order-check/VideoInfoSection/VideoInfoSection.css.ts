import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const videoInfoLayout = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "2.4rem",
  },
]);

export const videoInfoTextWrapper = style([
  flexGenerator("row", "flex-start"),
  {
    gap: "8rem",
  },
]);

export const videoInfoTypeTextStyle = style({
  ...vars.fonts.caption_04_me,
  color: vars.colors.gray04,
  minWidth: "4.8rem",
});

export const videoInfoTextStyle = style({
  ...vars.fonts.caption_03_14,
  color: vars.colors.gray05,
});
