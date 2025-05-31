import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const sectionStyle = style([
  flexGenerator("row", "space-between", "flex-start"),
  {
    gap: "6rem",
  },
]);

export const invitationImageStyle = style({
  width: "33.5rem",
  height: "45.9rem",
});

export const invitationInfoBox = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    width: "47.7rem",
    gap: "0.8rem",
  },
]);

export const invitationInfoTop = style([
  flexGenerator(),
  {
    gap: "1rem",
  },
]);

export const invitationTitleStyle = style([
  vars.fonts.head02_28,
  {
    color: vars.colors.black,
  },
]);

export const dividerStyle = style({
  width: "0.4rem",
  height: "3rem",
  backgroundColor: vars.colors.gray06,
});

export const discountRateStyle = style([
  vars.fonts.eh3_head03_24_eb,
  {
    color: vars.colors.lime07,
  },
]);

export const priceStyle = style([
  vars.fonts.eh3_head03_24_eb,
  {
    color: vars.colors.black,
  },
]);

export const descriptionStyle = style([
  vars.fonts.body06_20_m_24,
  {
    color: vars.colors.gray04,
  },
]);

export const ulStyle = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    width: "47.7rem",
    gap: "0.9rem",
    marginTop: "3.3rem",
  },
]);

export const liStyle = style([
  flexGenerator("row", "space-between"),
  {
    width: "100%",
  },
]);

export const optionTextStyle = style([
  vars.fonts.caption_03_14,
  {
    color: vars.colors.black,
  },
]);

export const selectBoxWrapper = style({
  width: "37.6rem",
});

export const orderButtonWrapper = style([
  flexGenerator("row", "flex-end"),
  {
    marginTop: "3.4rem",
  },
]);
