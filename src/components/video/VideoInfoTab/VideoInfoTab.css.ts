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

export const tabBarWrapper = style({
  width: "100%",
  paddingBottom: "0.5rem",
  borderBottom: `1px solid ${vars.colors.gray03}`,
});

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
    paddingLeft: "1.5rem",
    color: vars.colors.gray05,
  },
]);

export const shippingReturnWrapper = style([
  flexGenerator("column"),
  {
    width: "87.2rem",
    gap: "1.8rem",
  },
]);
