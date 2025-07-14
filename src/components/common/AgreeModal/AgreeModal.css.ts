import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const modalContainer = style([
  flexGenerator("column"),
  {
    width: "87.5rem",
    height: "60rem",

    padding: "4.7rem 4.1rem",
    boxShadow: "0px 0px 7px 0px rgba(0, 0, 0, 0.25)",
  },
]);

export const modalHeader = style([
  flexGenerator("row", "space-between"),
  {
    width: "100%",
  },
]);

export const modalHeaderH1 = style([
  vars.fonts.head02_28,
  {
    color: vars.colors.black,
  },
]);

export const deleteBtnStyle = style({
  cursor: "pointer"
});

export const questionBox = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    width: "100%",
    gap: "3rem",
    borderTop: `2px solid ${vars.colors.gray03}`,
    borderBottom: `1px solid ${vars.colors.gray03}`,
    padding: "3rem 0",
    margin: "2.4rem 0",
  },
]);

export const questionWrapper = style([
  flexGenerator("row", "flex-start", "center"),
  vars.fonts.body02_22,
  {
    width: "100%",
    height: "4rem",
    gap: "2rem",
    color: vars.colors.gray05,
  },
]);

export const thirdQuestionWrapper = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "0.8rem",
  },
]);

export const subTextStyle = style([
  vars.fonts.body11_18_m,
  {
    color: vars.colors.gray04,
    marginLeft: "4.3rem",
  },
]);

export const buttonWrapper = style([
  flexGenerator(),
  {
    width: "100%",
    marginTop: "6rem",
  },
]);
