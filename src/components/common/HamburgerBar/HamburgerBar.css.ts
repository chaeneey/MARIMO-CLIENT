import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const slideInFromRight = keyframes({
  from: {
    transform: "translateX(100%)",
    opacity: 0,
  },
  to: {
    transform: "translateX(0)",
    opacity: 1,
  },
});

export const hamburgerBarLayout = style([
  flexGenerator("column", "flex-start", "flex-end"),
  {
    position: "absolute",
    top: "0",
    right: "0",

    width: "100dvw",
    height: "100dvh",
    maxWidth: "43rem",

    backgroundColor: vars.colors.black,
    gap: "12rem",
    padding: "3.8rem 4.5rem",

    animation: `${slideInFromRight} 0.6s ease-out forwards`,
  },
]);

export const hamburgerDeleteButtonStyle = style([
  flexGenerator("row", "flex-end"),
  {},
]);

export const hamburgerBarButtonContainer = style({
  width: "100%",
});

export const hamburgerBarButtonStyle = recipe({
  base: {
    width: "100%",
    padding: "4rem 0",

    ...vars.fonts.eh4_head04_24_b,
  },
  variants: {
    isHome: {
      true: { color: vars.colors.gray04 },
      false: {
        color: vars.colors.white,
      },
    },
  },
});

export const hamburgerBarDivStyle = style({
  width: "100%",
  height: "0.1rem",
  backgroundColor: vars.colors.gray03,
});
