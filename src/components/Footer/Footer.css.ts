import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const footerStyle = style([
  flexGenerator("row", "space-between"),
  {
    width: "100%",
    height: "11rem",

    marginTop: "auto",
    padding: "3.7rem 13.9rem",
    bottom: 0,

    backgroundColor: vars.colors.black,
  },
]);

export const footerLeft = style([
  vars.fonts.body08_18_sb,
  flexGenerator(),
  {
    gap: "2.8rem",
    color: vars.colors.gray02,
  },
]);
export const dividerStyle = style({
  width: "0.1rem",
  height: "2rem",

  backgroundColor: vars.colors.gray03,
});

export const footerRight = style([
  flexGenerator(),
  {
    gap: "2.4rem",
  },
]);
