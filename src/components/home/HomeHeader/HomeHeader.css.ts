import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const homeHeaderLayout = recipe({
  base: [
    flexGenerator("row", "space-between"),
    {
      height: "10rem",
      padding: "2.5rem 13.1rem 2.5rem 14.2rem",

      position: "absolute",
      zIndex: "10",
      width: "100%",

      "@media": {
        "screen and (max-width: 1186px)": {
          padding: "2.5rem 3rem",
        },
      },
    },
  ],

  variants: {
    isHome: {
      ture: {
        backgroundColor: "transparent",
      },
      false: {
        backgroundColor: vars.colors.black,
        position: "fixed",
        top: "0",
      },
    },
  },
});

export const homeHeaderLeftContainer = style([
  flexGenerator(),
  {
    gap: "6rem",
  },
]);

export const homeHeaderLeftWrapper = style([
  flexGenerator(),
  {
    gap: "6rem",

    "@media": {
      "screen and (max-width: 960px)": {
        display: "none",
      },
    },
  },
]);

export const homeHeaderLinkStyle = style({
  ...vars.fonts.eh4_head04_24_b,
  color: vars.colors.lime09,
});
