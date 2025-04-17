import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const TextAreaContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "0.8rem" },
]);

export const TextAreaWrapper = style({
  width: "100%",
  position: "relative",
});

export const TextAreaStyle = recipe({
  base: [
    vars.fonts.caption_03_14,
    {
      width: "100%",
      height: "24.6rem",
      borderRadius: "2px",
      padding: "1.7rem 1.6rem 4rem 1.6rem",
      color: vars.colors.black,

      "::placeholder": {
        color: vars.colors.gray03,
      },

      ":focus": {
        border: `1px solid ${vars.colors.black}`,
      },
    },
  ],
  variants: {
    errorMessage: {
      true: {
        border: `1px solid ${vars.colors.alert01}`,
      },
      false: {
        border: `1px solid ${vars.colors.gray03}`,
      },
    },
  },
});

export const CountTextStyle = style([
  vars.fonts.caption_03_14,
  {
    color: vars.colors.gray05,
    position: "absolute",
    bottom: "1.7rem",
    right: "1.6rem",
  },
]);

export const TextAreaErrorText = style([
  vars.fonts.caption_04_me,
  {
    color: vars.colors.alert01,
  },
]);
