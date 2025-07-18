import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const accordionBox = style({
  width: "100%",
  backgroundColor: vars.colors.gray01,
});

export const accordionContainer = style([
  flexGenerator("row", "space-between"),
  {
    width: "100%",
    padding: "2rem 3.3rem",
    borderRadius: "6px",
    backgroundColor: vars.colors.gray01,
    cursor: "pointer",
  },
]);

export const accordionLeftSection = style([
  flexGenerator(),
  {
    gap: "2rem",
  },
]);

export const iconStyle = style([
  flexGenerator(),
  vars.fonts.body09_18_sb_narrow,
  {
    width: "2.4rem",
    height: "2.4rem",
    borderRadius: "12px",
    color: vars.colors.white,
    backgroundColor: vars.colors.black,
  },
]);

export const sampleTextStyle = style([
  vars.fonts.body02_22,
  {
    color: vars.colors.gray05,
  },
]);

export const accordionOpenContainer = style([
  flexGenerator("column"),
  {
    width: "100%",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
  },
]);

export const dividerStyle = style({
  width: "100%",
  height: "2px",
  backgroundColor: vars.colors.gray02,
});

export const accordionContentWrapper = style([
  flexGenerator(),
  vars.fonts.body07_20_m_36,
  {
    width: "100%",
    padding: "3rem 3.3rem",
    color: vars.colors.gray05,
  },
]);
