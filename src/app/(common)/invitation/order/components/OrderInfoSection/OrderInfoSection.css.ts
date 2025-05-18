import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

// 주문자 정보
export const inputTextStyle = style([
  vars.fonts.body08_18_sb,
  { color: vars.colors.gray05, marginTop: "2rem", minWidth: "fit-content" },
]);

export const customerNameWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  {
    gap: "3.8rem",
    width: "100%",
  },
]);

export const customerAdressWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  {
    gap: "8.9rem",
    width: "100%",
  },
]);

export const customerAdressInputWrapper = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "0.8rem",
    width: "100%",
  },
]);

export const customerAdressSearchWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  {
    gap: "0.7rem",
    width: "100%",
  },
]);

export const customerPhoneNumberWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  {
    gap: "5.9rem",
    width: "100%",
  },
]);

export const customerEmailWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  {
    gap: "7.4rem",
    width: "100%",
  },
]);

export const customerEmailInputWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  {
    gap: "0.8rem",
    width: "100%",
  },
]);

export const customerEmailTextStyle = style(vars.fonts.head04_22);
