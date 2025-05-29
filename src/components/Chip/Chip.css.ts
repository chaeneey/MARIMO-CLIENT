import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const chipStyle = style([
  vars.fonts.caption_03_14,
  flexGenerator(),
  {
    color: vars.colors.lime03,
    backgroundColor: vars.colors.black,
    padding: "0.2rem 0.9rem",
    width: "fit-content",
    borderRadius: "2px",
  },
]);
