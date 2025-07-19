import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const addButtonWrapper = style([
  flexGenerator(),
  {
    gap: "0.2rem",
    cursor: "pointer",
  },
]);

export const addButtonTextStyle = style({
  ...vars.fonts.caption_04_me,
  color: vars.colors.gray04,
});
