import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const selectBoxStyle = style([
  vars.fonts.body08_18_sb,
  flexGenerator("row", "space-between"),
  {
    width: "100%",
    height: "6rem",
    padding: "1.8rem 2.2rem",

    color: vars.colors.gray05,
    backgroundColor: vars.colors.white,

    border: "1px solid transparent",
    borderRadius: "2px",
  },
]);

export const selectBoxBorderStyle = styleVariants({
  default: {
    borderColor: "transparent",
  },
  open: {
    borderColor: vars.colors.gray03,
  },
});

export const arrowIconStyle = style({
  width: "2.4rem",
  height: "2.4rem",
});

export const ulStyle = style([
  flexGenerator("column"),
  {
    width: "100%",
    gap: "0.2rem",
    padding: "1.1rem 0",

    backgroundColor: vars.colors.white,

    borderRadius: "2px",
    border: `1px solid ${vars.colors.gray03}`,
  },
]);

export const liStyle = style([
  vars.fonts.body08_18_sb,
  flexGenerator("column"),
  {
    width: "100%",
    gap: "0.2rem",

    color: vars.colors.gray05,

    cursor: "pointer",
  },
]);

export const liOptionStyle = style([
  flexGenerator("row", "space-between"),
  {
    width: "100%",
    height: "6rem",
    padding: "1.9rem 2.2rem",

    backgroundColor: vars.colors.white,
  },
]);

export const liOptionLeftStyle = style([
  flexGenerator(),
  {
    gap: "0.8rem",
  },
]);

export const liSubValueStyle = style([
    vars.fonts.c3_caption_03_14,
  {
    color: vars.colors.gray04,
  },
]);

export const dividerStyle = style({
  width: "100%",
  height: "0.1rem",

  margin: "0 1rem",

  backgroundColor: vars.colors.gray02,
});
