import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";

export const videoPageLayout = style([
  flexGenerator("column"),
  {
    gap: "12rem",
    width: "100%",
    paddingBottom: "45rem",
  },
]);
