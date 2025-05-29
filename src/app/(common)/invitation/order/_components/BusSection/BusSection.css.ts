import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const inputTextStyle = style([
  vars.fonts.body08_18_sb,
  { color: vars.colors.gray05, marginTop: "2rem", minWidth: "fit-content" },
]);

// 전세버스
export const busContainer = style([
  flexGenerator("column", "flex-start", "flex-end"),
  { gap: "0.8rem", width: "100%" },
]);

export const busInputWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  {
    gap: "3.2rem",
    width: "100%",
  },
]);

export const timeWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  { gap: "0.8rem", width: "100%" },
]);
