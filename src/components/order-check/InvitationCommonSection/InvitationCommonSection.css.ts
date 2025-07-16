import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const inviCommonContainer = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "2.4rem",
  },
]);

export const inviCommonTitleStyle = style({
  ...vars.fonts.body09_18_sb_narrow,
  color: vars.colors.gray05,
});

export const inviCommonTextWrapper = style([
  flexGenerator("row", "flex-start"),
  {
    gap: "6.5rem",
  },
]);

export const weddingTimeWrapper = style([
  flexGenerator("row", "space-between"),
  {
    gap: "1.8rem",
  },
]);

export const inviCommonRoleTextStyle = style({
  ...vars.fonts.caption_04_me,
  color: vars.colors.gray04,
  minWidth: "6.4rem",
});

export const inviCommonNameTextStyle = style({
  ...vars.fonts.caption_03_14,
  color: vars.colors.gray05,
});
