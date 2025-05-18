import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const accordionWrapper = style([
  flexGenerator("column"),
  {
    width: "100%",
  },
]);

export const accordionBoxStyle = style([
  flexGenerator("row", "space-between"),
  {
    width: "100%",
    height: "8rem",
    padding: "2.3rem 2.5rem",
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

export const titleStyle = recipe({
  base: style([vars.fonts.head04_22]),
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
  width: "3.4rem",
  height: "3.4rem",

  cursor: "pointer",
  transition: "transform 0.3s ease",
});

export const arrowRotateStyle = style({
  transform: "rotate(180deg)",
});

export const accordionContentWrapper = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    width: "100%",
    minHeight: "10rem",

    padding: "0 2.5rem",
  },
]);

export const dividerStyle = style([
  flexGenerator(),
  {
    width: "100%",
    height: "0.3rem",

    backgroundColor: vars.colors.black,
  },
]);

export const accordionChildrenWrapper = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { width: "100%", gap: "3.6rem", padding: "3.6rem 0rem" },
]);
