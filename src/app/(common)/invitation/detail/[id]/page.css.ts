import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const invitationDetailPageStyle = style([
  flexGenerator("column"),
  {
    width: "100dvw",
    padding: "12rem 0rem 25rem",
    paddingTop: "22rem",
  },
]);

export const noteWrapper = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    gap: "1.6rem",
    padding: "3.6rem 15.5rem 3.6rem 5.6rem",
    marginTop: "12rem",
    backgroundColor: vars.colors.white,
    border: `1px solid ${vars.colors.gray03}`,
    borderRadius: "4px",
  },
]);

export const noteSpanStyle = style([
  vars.fonts.eh5_head05_18,
  {
    color: vars.colors.gray06,
  },
]);

export const noteSmallStyle = style([
  vars.fonts.caption_03_14,
  {
    color: vars.colors.gray04,
  },
]);
