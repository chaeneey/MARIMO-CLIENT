import { keyframes, style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

const fadeInUpLoop = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(20px)",
  },
  "10%": {
    opacity: 1,
    transform: "translateY(0)",
  },
  "90%": {
    opacity: 1,
    transform: "translateY(0)",
  },
  "100%": {
    opacity: 0,
    transform: "translateY(-10px)",
  },
});

export const completeIconWrapper = style({
  animation: `${fadeInUpLoop} 3s ease-in-out infinite`,
});

export const completeLayout = style([
  flexGenerator("column"),
  {
    paddingTop: "20rem",
    gap: "4.4rem",
  },
]);

export const completeTextWrapper = style([
  flexGenerator("column"),
  {
    gap: "1.2rem",
  },
]);

export const completeMainTextStyle = style({
  ...vars.fonts.head02_28,
  color: vars.colors.black,
});

export const completeSubTextWrapper = style([
  flexGenerator(),
  {
    gap: "1rem",
  },
]);

export const completeSubTextStyle = style({
  ...vars.fonts.body05_20_24,
  color: vars.colors.gray06,
});

export const completeOrderNumberTextStyle = style({
  ...vars.fonts.eh5_head05_18,
  color: vars.colors.gray05,
});

export const completeMessageTextStyle = style({
  ...vars.fonts.caption_03_14,
  color: vars.colors.gray04,
});
