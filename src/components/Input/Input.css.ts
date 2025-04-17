import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const InputContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "1.2rem",
  },
]);

export const InputStyle = recipe({
  base: [
    vars.fonts.body06_20_m_24,
    {
      width: "100%",
      color: vars.colors.black,
      padding: "2.3rem 1.8rem",
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
    error: {
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
  vars.fonts.body06_20_m_24,
  {
    color: vars.colors.gray04,
  },
]);

export const InputErrorText = style([
  vars.fonts.body06_20_m_24,
  {
    color: vars.colors.alert01,
  },
]);
