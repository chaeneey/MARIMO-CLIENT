import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const cardContainer = style([
  flexGenerator("column"),
  {
    width: "47.5rem",
    // height: "9.5rem",
    padding: "1.5rem 2.7rem",
    borderRadius: "1.5px",
    backgroundColor: vars.colors.white,
  },
]);

export const cardHeader = style([
  flexGenerator("row", "flex-start"),
  vars.fonts.caption_03_14,
  {
    width: "100%",
    marginBottom: "0.8rem",
    color: vars.colors.gray05,
  },
]);

export const fixedQuantityText = style([
  vars.fonts.caption_03_14,
  {
    color: vars.colors.gray05,
  },
]);

export const dividerStyle = style({
  width: "100%",
  height: "1px",
  backgroundColor: vars.colors.gray04,
});

export const bottomWrapper = style([
  flexGenerator("row", "space-between"),
  { width: "100%", marginTop: "1.6rem" },
]);

export const buttonsWrapper = style([
  flexGenerator("row"),
  {
    width: "8rem",
    height: "2.5rem",
    borderRadius: "2px",
    border: `1px solid ${vars.colors.gray02}`,
    backgroundColor: vars.colors.white,
  },
]);

export const buttonDividerStyle = style({
  width: "1px",
  height: "2.3rem",
  backgroundColor: vars.colors.gray02,
});

export const quantityTextStyle = style([
  flexGenerator(),
  vars.fonts.caption_03_14,
  {
    width: "3rem",
    color: vars.colors.black,
  },
]);

export const buttonStyle = style([
  flexGenerator(),
  {
    width: "2.3rem",
    height: "2.3rem",
  },
]);

export const priceTextStyle = style([
  vars.fonts.caption_03_14,
  {
    color: vars.colors.gray06,
  },
]);
