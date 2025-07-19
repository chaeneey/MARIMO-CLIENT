import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const inputContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "0.8rem",
    width: "100%",
  },
]);

export const inputWrapper = recipe({
  base: {
    width: "100%",
    position: "relative",
  },
  variants: {
    readOnly: {
      true: {
        backgroundColor: vars.colors.gray01,
        pointerEvents: "none",
      },
      false: {
        backgroundColor: vars.colors.white,
      },
    },
  },
});

export const inputStyle = recipe({
  base: [
    vars.fonts.caption_04_me,
    {
      width: "100%",
      color: vars.colors.black,
      padding: "1.8rem 4rem 1.8rem 1.6rem",
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

export const deleteButtonStyle = style({
  width: "1.8rem",
  height: "1.8rem",
  position: "absolute",
  top: "2rem",
  right: "1.7rem",
});

export const inputInfoText = style([
  vars.fonts.caption_04_me,
  {
    color: vars.colors.gray04,
  },
]);

export const inputErrorText = style([
  vars.fonts.caption_04_me,
  {
    color: vars.colors.alert01,
  },
]);
