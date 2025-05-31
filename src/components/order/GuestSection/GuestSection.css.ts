import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const inputTextStyle = style([
  vars.fonts.body08_18_sb,
  { color: vars.colors.gray05, marginTop: "2rem" },
]);

// 방명록
export const guestWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  { gap: "2.1rem", width: "100%" },
]);
