import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const buttonStyle = style([
  vars.fonts.body07_20_m_36,
  flexGenerator(),
  {
    width: "20rem",
    height: "20rem",

    color: vars.colors.gray05,
    backgroundColor: vars.colors.gray02,

    borderRadius: "2px",
  },
]);
