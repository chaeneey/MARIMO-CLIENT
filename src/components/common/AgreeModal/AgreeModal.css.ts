import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";

export const questionWrapper = style([
  flexGenerator("row", "flex-start", "flex-start"),
  {
    gap: "2rem",
  },
]);
