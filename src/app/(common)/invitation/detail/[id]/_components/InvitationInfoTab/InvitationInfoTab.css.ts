import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const containerStyle = style([
  flexGenerator("column", "flex-start", "flex-start"),
  {
    width: "87.2rem",
    gap: "12rem",
    marginTop: "12rem",
  },
]);

export const h2Style = style([
  vars.fonts.head02_28,
  {
    color: vars.colors.black,
    marginBottom: "3.6rem",
  },
]);

export const mobileCardWrapper = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "1.8rem 3.4rem",
});

export const checkListUlStyle = style([
  vars.fonts.caption_02_18,
  {
    listStyleType: "disc",
    paddingLef: "1.5rem",
    color: vars.colors.gray05,
  },
]);
