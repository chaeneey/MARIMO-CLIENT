import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const mainSectionStyle = style([
  flexGenerator("column", "center", "center"),
  {
    width: "100%",
    padding: "12rem 0 32rem 0",
    margin: "0 auto",
  },
]);

export const textSectionStyle = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    width: "87.2rem",
    gap: "1.8rem",
  },
]);

export const titleTextStyle = style([
  vars.fonts.eh2_head02_28_b,
  {
    color: vars.colors.black,
  },
]);

export const pStyle = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "0.8rem",
  },
]);

export const body09Style = style([
  vars.fonts.body09_18_sb_narrow,
  {
    color: vars.colors.gray05,
  },
]);

export const body11Style = style([
  vars.fonts.body11_18_m,
  {
    color: vars.colors.gray04,
  },
]);
