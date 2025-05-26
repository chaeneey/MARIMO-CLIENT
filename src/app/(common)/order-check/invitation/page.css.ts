import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const orderCheckInvitationLayout = style([
  flexGenerator("row", "center", "flex-start"),
  { width: "100%", gap: "2rem", paddingTop: "10rem", paddingBottom: "25rem" },
]);

export const orderCheckInviLeftSection = style({
  width: "100%",
  maxWidth: "50rem",
});

export const orderCheckInviRightSection = style({
  width: "100%",
  maxWidth: "35rem",
});
