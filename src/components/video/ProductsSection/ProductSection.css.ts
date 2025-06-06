import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const productSectionLayout = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    width: "100%",
    maxWidth: "87.2rem",
    gap: "6rem",
  },
]);

export const productSectionTitleStyle = style({
  ...vars.fonts.eh2_head02_28_b,
  color: vars.colors.black,
});

export const productCardLayout = style([
  flexGenerator("row", "flex-start"),
  { gap: "5.8rem", flexWrap: "wrap" },
]);

export const productCardContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "1rem",
  },
]);

export const videoStyle = style({
  width: "40rem",
  height: "29rem",
  backgroundColor: vars.colors.black,
});

// export const videoInfoContainer = style([flexGenerator('column'), {}]);

export const videoTitleStyle = style({
  ...vars.fonts.eh5_head05_18,
  color: vars.colors.gray06,
});

export const videoInfoWrapper = style([
  flexGenerator("row", "flex-start"),
  {
    gap: "1rem",
  },
]);

export const videoSaleStyle = style({
  ...vars.fonts.body08_18_sb,
  color: vars.colors.lime07,
});

export const videoPriceStyle = style({
  ...vars.fonts.body08_18_sb,
  color: vars.colors.black,
});
