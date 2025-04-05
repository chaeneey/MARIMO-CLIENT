import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const selectBoxStyle = style([
  flexGenerator("row", "space-between"),
  {
    width: "100%",
    height: "6rem",
    padding: "1.8rem 2.2rem",

    backgroundColor: vars.colors.white,

    borderRadius: "2px",
  },
]);
