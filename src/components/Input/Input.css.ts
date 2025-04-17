import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const InputContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "0.8rem",
  },
]);

export const InputStyle = recipe({
  base: [
    vars.fonts.body11_18_m,
    {
      width: "100%",
      color: vars.colors.black,
      padding: "1.7rem 1.6rem",
      border: `1px solid ${vars.colors.gray03}`,
      borderRadius: "2px",

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

export const InputInfoText = style([
  vars.fonts.caption_04_me,
  {
    color: vars.colors.gray04,
  },
]);

export const InputErrorText = style([
  vars.fonts.caption_04_me,
  {
    color: vars.colors.alert01,
  },
]);
