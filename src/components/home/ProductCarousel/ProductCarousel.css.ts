import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const carouselLayout = style([
  flexGenerator("column"),
  {
    gap: "5rem",
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

  "@media": {
    "screen and (max-width: 935px)": {
      ...vars.fonts.head01_32,
    },
  },
});

export const carouselSubTextStyle = style({
  ...vars.fonts.home04_26_m,
  color: vars.colors.gray03,

  "@media": {
    "screen and (max-width: 935px)": {
      ...vars.fonts.caption_02_18,
    },
  },
});

export const carouselArrowStyle = style({
  "@media": {
    "screen and (max-width: 1160px)": {
      display: "none",
    },
  },
});

export const carouselBottomContainer = recipe({
  base: [
    flexGenerator("row", "flex-start"),
    {
      gap: "3rem",
      overflow: "scroll",
      width: "100%",
      padding: "0rem 30rem 0rem 13.8rem",

      "@media": {
        "screen and (max-width: 935px)": {
          padding: "0rem 13.8rem",
        },
      },
    },
  ],

  variants: {
    direction: {
      right: [{}],
      left: {
        transform: "scaleX(-1)",
      },
    },
  },
});

export const carouselRightImageStyle = style({
  width: "36rem",
  height: "36rem",

  "@media": {
    "screen and (max-width: 935px)": {
      width: "26rem",
      height: "26rem",
    },
  },
});

export const carouselLeftImageStyle = style({
  width: "48rem",
  height: "32rem",
  transform: "scaleX(-1)",

  "@media": {
    "screen and (max-width: 935px)": {
      width: "38rem",
      height: "22rem",
    },
  },
});
