import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const backdropStyle = style({
  position: "fixed",
  left: "0",
  top: "0",

  width: "100%",
  height: "100%",

  zIndex: "3",

  background: "rgba(0, 0, 0, 0.7)",
  backdropFilter: "blur(5px)",
});

export const modalContentStyle = style([
  flexGenerator(),
  {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "4",

    borderRadius: "12px",
    backgroundColor: vars.colors.white,
  },
]);
