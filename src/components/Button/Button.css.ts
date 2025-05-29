import { recipe } from "@vanilla-extract/recipes";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const buttonSizeStyle = recipe({
  base: [
    flexGenerator(),
    {
      minWidth: "fit-content",
      borderRadius: "2px",
      cursor: "pointer",
    },
  ],
  variants: {
    size: {
      "56": {
        ...vars.fonts.head04_22,
        padding: "1.3rem 15rem",
      },
      "50": {
        ...vars.fonts.head04_22,
        padding: "1rem 5.3rem",
      },
      "38": {
        ...vars.fonts.head05_20,
        padding: "0.5rem 2rem",
      },
      "35": {
        ...vars.fonts.body09_18_sb_narrow,
        padding: "0.7rem 1.2rem",
      },
      "30": {
        ...vars.fonts.eh5_head05_18,
        padding: "0.4rem 1.7rem",
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
      lime04: {
        color: vars.colors.lime04,
        backgroundColor: "transparent",
        border: `1px solid ${vars.colors.lime04}`,
      },
      gray: {
        color: vars.colors.gray03,
        backgroundColor: vars.colors.gray05,
      },
      white: {
        color: vars.colors.white,
        backgroundColor: vars.colors.gray07,
      },
      stroke: [
        vars.fonts.caption_03_14,
        {
          color: vars.colors.black,
          backgroundColor: vars.colors.white,
          border: `1px solid ${vars.colors.black}`,
        },
      ],
    },
  },
});
