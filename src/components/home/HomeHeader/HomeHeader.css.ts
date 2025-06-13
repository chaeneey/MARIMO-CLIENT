import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const homeHeaderLayout = style([
  flexGenerator("row", "space-between"),
  {
    height: "10rem",
    padding: "2.5rem 13.1rem 2.5rem 14.2rem",
    backgroundColor: "transparent",
    position: "absolute",
    zIndex: "10",
    width: "100%",

    "@media": {
      "screen and (max-width: 1186px)": {
        padding: "2.5rem 3rem",
      },
    },
  },
]);

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
