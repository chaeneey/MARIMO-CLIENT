import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const ImageDragBoxContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "1.8rem",
    width: "100%",
  },
]);

export const buttonWithTextStyle = style([
  flexGenerator("row", "flex-start"),
  {
    gap: "1.2rem",
  },
]);

export const textStyle = style({
  ...vars.fonts.body03_20_36,
  color: vars.colors.gray05,
});

export const ImageDragBoxStyle = style([
  flexGenerator("column", "flex-end", "flex-end"),
  {
    backgroundColor: vars.colors.gray01,
    border: `1px solid ${vars.colors.gray03}`,
    padding: "3.2rem 2.8rem",
    width: "100%",
    minHeight: "40rem",
  },
]);

export const countTextStyle = style({
  ...vars.fonts.caption_03_14,
  color: vars.colors.gray05,
});
