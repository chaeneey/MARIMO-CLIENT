import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const textAreaContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "0.8rem" },
]);

export const textAreaWrapper = recipe({
  base: [
    flexGenerator("column", "space-between", "flex-end"),
    {
      width: "100%",
      height: "24.6rem",
      padding: "1.8rem 1.6rem",
      borderRadius: "2px",

      ":focus-within": {
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

export const textAreaStyle = style([
  vars.fonts.caption_03_14,
  {
    width: "100%",
    height: "100%",
    color: vars.colors.black,

    "::placeholder": {
      color: vars.colors.gray03,
    },
  },
]);

export const countTextStyle = style([
  vars.fonts.caption_03_14,
  {
    color: vars.colors.gray05,
    paddingTop: "0.7rem",
  },
]);

export const textAreaErrorText = style([
  vars.fonts.caption_04_me,
  {
    color: vars.colors.alert01,
  },
]);
