import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";

export const videoDetailLayout = style([
  flexGenerator("column"),
  {
    gap: "12rem",
    width: "100%",
    paddingTop: "22rem",
    paddingBottom: "25rem",
  },
]);
