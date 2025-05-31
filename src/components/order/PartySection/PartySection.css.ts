import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const inputTextStyle = style([
  vars.fonts.body08_18_sb,
  { color: vars.colors.gray05, marginTop: "2rem", minWidth: "fit-content" },
]);

// 피로연
export const partyInputWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  {
    gap: "4.8rem",
    width: "100%",
  },
]);

export const timeWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  { gap: "0.8rem", width: "100%" },
]);
