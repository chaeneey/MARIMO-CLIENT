import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const modalContainer = style([
  flexGenerator("column"),
  {
    width: "87.5rem",
    borderRadius: "12px",
    padding: "4.1rem 5rem",
    backgroundColor: vars.colors.white,
  },
]);

export const modalHeader = style([
  flexGenerator("row", "space-between"),
  {
    width: "100%",
    height: "3.6rem",
    marginBottom: "2.4rem",
  },
]);

export const modalHeaderTextStyle = style([
  vars.fonts.head02_28,
  {
    color: vars.colors.black,
  },
]);

export const closeButtonStyle = style({
  cursor: "pointer",
});

export const dividerStyle = style({
  width: "100%",
  height: "2px",
  backgroundColor: vars.colors.gray03,
  marginBottom: "3.1rem",
});

export const accordionWrapper = style([
  flexGenerator("column"),
  {
    width: "100%",
    gap: "1.3rem",

    overflowY: "auto",
  },
]);

export const buttonWrapper = style([
  flexGenerator(),
  {
    width: "18rem",
    marginTop: "4.4rem",
  },
]);
