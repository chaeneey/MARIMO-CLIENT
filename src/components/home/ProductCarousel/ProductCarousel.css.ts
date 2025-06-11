import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const carouselLayout = style([
  flexGenerator("column"),
  {
    gap: "5rem",
    backgroundColor: "black",
    width: "100%",
  },
]);

export const carouselTopContainer = recipe({
  base: {
    width: "100%",
    padding: "0rem 13.8rem",
  },

  variants: {
    direction: {
      right: [flexGenerator("row", "space-between")],
      left: [flexGenerator("row-reverse", "space-between")],
    },
  },
});

export const carouselTopTextWrapper = recipe({
  base: {
    width: "100%",
    gap: "2.4rem",
  },

  variants: {
    direction: {
      right: [flexGenerator("column", "flex-start", "flex-start")],
      left: [flexGenerator("column", "flex-end", "flex-end")],
    },
  },
});

export const carouselMainTextStyle = style({
  ...vars.fonts.home03_60_l,
  color: vars.colors.white,
});

export const carouselSubTextStyle = style({
  ...vars.fonts.home04_26_m,
  color: vars.colors.gray03,
});

export const carouselBottomContainer = style([
  flexGenerator("row", "flex-start"),
  {
    gap: "3rem",
    overflow: "scroll",
    padding: "0rem 13.8rem",
  },
]);
