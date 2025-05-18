import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const selectBoxStyle = recipe({
  base: [
    vars.fonts.caption_03_14,
    flexGenerator("row", "space-between"),
    {
      padding: "1.4rem 2rem 1.4rem 1.8rem",

      color: vars.colors.gray05,
      backgroundColor: vars.colors.white,
      width: "100%",

      border: "1px solid transparent",
      borderRadius: "2px",
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
        border: "1px solid transparent",
        height: "4.8rem",
      },
    },
  },
});

export const selectBoxBorderStyle = styleVariants({
  default: {
    borderColor: "transparent",
  },
  open: {
    borderColor: vars.colors.gray03,
  },
});

export const arrowIconStyle = style({
  width: "2.4rem",
  height: "2.4rem",
});

export const ulStyle = style([
  flexGenerator("column"),
  {
    width: "100%",
    gap: "0.2rem",
    padding: "1.1rem 0",

    backgroundColor: vars.colors.white,

    borderRadius: "2px",
    border: `1px solid ${vars.colors.gray03}`,
  },
]);

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
  },
]);

export const dividerStyle = style({
  width: "95%",
  height: "0.1rem",

  backgroundColor: vars.colors.gray02,
});
