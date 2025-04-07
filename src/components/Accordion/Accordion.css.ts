import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const accordionWrapper = style([
  flexGenerator("column"),
  {
    width: "100%",

    border: "1px solid black",
  },
]);

export const accordionBoxStyle = style([
  flexGenerator("row", "space-between"),
  {
    width: "100%",
    height: "10rem",
    padding: "3.4rem 3.2rem",
  },
]);

export const leftSectionWrapper = style([
  flexGenerator(),
  {
    gap: "3.3rem",
  },
]);

export const checkboxStyle = recipe({
  base: {
    width: "3.2rem",
    height: "3.2rem",
    border: "2px solid",

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

export const titleStyle = recipe({
  base: style([vars.fonts.head02_28]),
  variants: {
    colorType: {
      black: {
        color: vars.colors.black,
      },
      gray: {
        color: vars.colors.gray04,
      },
    },
  },
});

export const arrowIconStyle = style({
  width: "4.8rem",
  height: "4.8rem",
});
