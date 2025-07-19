import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const sourceImageWrapper = style([
  flexGenerator("row"),
  {
    flexWrap: "wrap",
    gap: "1rem",
  },
]);

export const sourceImageStyle = style({
  width: "14rem",
  height: "14rem",
  backgroundColor: vars.colors.gray05, // 나중에 지울 것
});

export const sourceTypeTextStyle = style({
  ...vars.fonts.caption_04_me,
  color: vars.colors.gray04,
  minWidth: "3.6rem",
});

export const sourceTextStyle = style({
  ...vars.fonts.caption_03_14,
  color: vars.colors.gray05,
});

export const sourceColWrapper = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "1.6rem" },
]);

export const sourceRowWrapper = style([
  flexGenerator("row", "flex-start"),
  { gap: "8rem" },
]);

export const sourceVideoLink = style([
  vars.fonts.caption_03_14,
  {
    color: vars.colors.gray05,
  },
]);
