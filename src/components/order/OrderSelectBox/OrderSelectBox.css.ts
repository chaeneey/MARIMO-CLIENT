import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";
export const selectBoxLayout = recipe({
  base: [
    {
      position: "relative",
      width: "100%",
    },
  ],
  variants: {
    variant: {
      order: {
        border: "1px solid black",
        maxWidth: "16rem",
        height: "5.6rem",
      },
      product: {
        height: "4.8rem",
      },
    },
  },
});
export const selectBoxStyle = style([
  vars.fonts.caption_03_14,
  flexGenerator("row", "space-between"),
  {
    padding: "1.4rem 2rem 1.4rem 1.8rem",
    color: vars.colors.gray05,
    backgroundColor: vars.colors.white,
    width: "100%",
    lineHeight: "2rem",
    borderRadius: "2px",
  },
]);
export const selectBoxBorderStyle = styleVariants({
  default: {
    // borderColor: "transparent",
    border: "none",
  },
  open: {
    borderColor: vars.colors.gray03,
  },
});
export const arrowIconStyle = style({
  width: "1.8rem",
  height: "1.8rem",
});
export const ulStyle = recipe({
  base: [
    flexGenerator("column"),
    {
      width: "100%",
      overflowY: "auto",
      gap: "0.2rem",
      padding: "1.1rem 0",
      position: "absolute",
      zIndex: 1,

      backgroundColor: vars.colors.white,
      border: `1px solid ${vars.colors.gray03}`,
      borderRadius: "2px",
    },
  ],
  variants: {
    variant: {
      product: {},
      order: {
        // top: 60,
      },
    },
  },
});
export const liStyle = style([
  vars.fonts.caption_03_14,
  flexGenerator("column"),
  {
    width: "100%",
    gap: "0.2rem",
    color: vars.colors.gray05,
    cursor: "pointer",
  },
]);
export const liOptionStyle = style([
  flexGenerator("row", "space-between"),
  {
    width: "100%",
    height: "4.8rem",
    padding: "1.4rem 2rem 1.4rem 1.8rem",

    backgroundColor: vars.colors.white,
  },
]);
export const liOptionLeftStyle = style([
  flexGenerator(),
  {
    gap: "0.163rem",
  },
]);

export const liSubValueStyle = style([
  vars.fonts.caption_03_14,
  {
    color: vars.colors.gray04,
    minWidth: "fit-content",
  },
]);
export const dividerStyle = style({
  width: "95%",
  height: "0.1rem",
  backgroundColor: vars.colors.gray02,
});
