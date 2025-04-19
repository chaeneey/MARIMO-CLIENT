import { recipe } from "@vanilla-extract/recipes";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const buttonSizeStyle = recipe({
  base: [
    flexGenerator(),
    {
      width: "100%",
      borderRadius: "2px",
      cursor: "pointer",
    },
  ],
  variants: {
    size: {
      "56": {
        ...vars.fonts.head04_22,
        padding: "1.3rem 1.5rem",
      },
      "50": {
        ...vars.fonts.head04_22,
        padding: "1rem 4.9rem",
      },
      "38": {
        ...vars.fonts.head05_20,
        padding: "0.5rem 2rem",
      },
      "35": {
        ...vars.fonts.body09_18_sb_narrow,
        padding: "0.75rem 1.2rem",
      },
    },
  },
});

export const buttonColorStyle = recipe({
  base: {},
  variants: {
    color: {
      lime01: {
        color: vars.colors.lime01,
        backgroundColor: vars.colors.gray07,
      },
      lime03: {
        color: vars.colors.lime03,
        backgroundColor: vars.colors.gray07,
      },
      gray: {
        color: vars.colors.gray03,
        backgroundColor: vars.colors.gray05,
      },
      white: {
        color: vars.colors.white,
        backgroundColor: vars.colors.gray07,
      },
    },
  },
});
