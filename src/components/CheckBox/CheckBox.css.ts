import { recipe } from "@vanilla-extract/recipes";

import { vars } from "@styles/theme.css";

export const checkboxStyle = recipe({
  base: {
    width: "2.4rem",
    height: "2.4rem",
    border: "1.5px solid",

    cursor: "pointer",
  },
  variants: {
    state: {
      checked: {
        backgroundColor: vars.colors.black,

        borderColor: vars.colors.black,
      },
      unchecked: {
        backgroundColor: vars.colors.white,

        borderColor: vars.colors.gray04,
      },
    },
  },
});
