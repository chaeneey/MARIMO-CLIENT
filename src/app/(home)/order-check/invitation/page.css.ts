import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";

export const orderCheckInvitationLayout = style([
  flexGenerator("row", "center", "flex-start"),
  {
    width: "100%",
    gap: "2rem",
    paddingTop: "22rem",
    paddingBottom: "25rem",
    "@media": {
      "screen and (max-width: 872px)": {
        flexDirection: "column",
        alignItems: "center",
      },
    },
  },
]);

export const orderCheckInviLeftSection = style([
  flexGenerator("column"),
  {
    width: "100%",
    maxWidth: "50rem",
    gap: "1.8rem",
  },
]);

export const orderCheckInviRightSection = style({
  width: "100%",
  maxWidth: "35rem",
  position: "sticky",
  top: "12rem",
});
