import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const headerWrapper = style([
  flexGenerator("row", "flex-start", "center"),
  {
    position: "fixed",
    top: "0",
    width: "100%",
    maxWidth: "100vw",
    padding: "2.5rem 13.1rem 2.5rem 14.2rem",

    zIndex: "1",

    backgroundColor: "transparent",
    transition: "background-color 0.2s ease-in-out",

    "@media": {
      "screen and (max-width: 1186px)": {
        padding: "2.5rem 3rem",
      },
    },
  },
]);

export const headerWrapperScrolled = style({
  backgroundColor: vars.colors.black,
  transition: "background-color 0.2s ease-in-out",
});

export const tabBarSection = style({
  width: "59.6rem",
  marginLeft: "6rem",
  display: "block",

  "@media": {
    "screen and (max-width: 960px)": {
      display: "none",
    },
  },
});

export const buttonSection = style({
  maxWidth: "10.2rem",
  marginLeft: "auto",
});
