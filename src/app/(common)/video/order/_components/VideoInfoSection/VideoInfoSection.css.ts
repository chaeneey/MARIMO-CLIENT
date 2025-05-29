import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const titleTextStyle = style({
  ...vars.fonts.body08_18_sb,
  color: vars.colors.gray05,
  minWidth: "6.3rem",
});

export const videoInfoRowContainer = style([
  flexGenerator("row", "flex-start"),
  {
    gap: "5.6rem",
    width: "100%",
  },
]);

export const videoInfoRowWrapper = style([
  flexGenerator("row", "flex-start"),
  {
    gap: "0.8rem",
    width: "100%",
  },
]);
