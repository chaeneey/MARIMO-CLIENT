import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const videoSelectLayout = style([
  flexGenerator("row", "center", "flex-start"),
  {
    width: "100%",
    maxWidth: "87.2rem",
    gap: "6rem",
  },
]);

export const videoImageStyle = style({
  width: "33.4rem",
  height: "33.4rem",
  backgroundColor: vars.colors.gray05,
});

export const videoOrderContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "3.4rem",
  },
]);

export const videoOrderTopSection = style([
  flexGenerator("column", "flex-start", "flex-start"),
  { gap: "0.8rem" },
]);

export const videoOrderTopWrapper = style([
  flexGenerator(),
  {
    gap: "1rem",
  },
]);

export const videoOrderCenterSection = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    width: "100%",
    backgroundColor: vars.colors.white,
    padding: "1.5rem 2.7rem",
    gap: "1.2rem",
  },
]);

export const videoOrderCenterWrapper = style([
  flexGenerator("row", "space-between"),
  { width: "100%" },
]);

export const videoOrderButtonStyle = style([
  flexGenerator("row", "flex-end", "flex-end"),
  {
    width: "100%",
  },
]);

// text
export const videoOrderTitleStyle = style({
  ...vars.fonts.head02_28,
  color: vars.colors.black,
});

export const videoOrderSaleTextStyle = style({
  ...vars.fonts.eh3_head03_24_eb,
  color: vars.colors.lime07,
});

export const videoOrderPriceTextStyle = style({
  ...vars.fonts.eh3_head03_24_eb,
  color: vars.colors.black,
});

export const videoOrderDetailTextStyle = style({
  ...vars.fonts.body06_20_m_24,
  color: vars.colors.gray04,
});

export const videoTextStyle = style({
  ...vars.fonts.caption_03_14,
  color: vars.colors.gray05,
});

export const videoTotalTextStyle = style({
  ...vars.fonts.body10_18_b,
  color: vars.colors.gray04,
});

export const videoTotalPriceStyle = style({
  ...vars.fonts.body05_20_24,
  color: vars.colors.gray06,
});

// bar
export const videoSelectBar = style({
  height: "0.1rem",
  width: "100%",
  backgroundColor: vars.colors.black,
});

export const videoOrderTitleBarStyle = style({
  width: "0.4rem",
  height: "3rem",
  backgroundColor: vars.colors.gray06,
});
