import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const orderPageLayout = style([
  flexGenerator("column"),
  {
    gap: "2.8rem",
    width: "100%",
    marginTop: "12rem",
    marginBottom: "16rem",
  },
]);

// 청첩장 주문하기 상단 부분
export const titleWrapper = style([
  flexGenerator("row", "space-between"),
  {
    width: "100%",
  },
]);

export const boxWrapper = style([
  flexGenerator("column"),
  {
    position: "sticky",
    top: "3rem",
    background: vars.colors.white,
    zIndex: "1",
    width: "100%",
    gap: "2.8rem",
  },
]);

export const titleTextStyle = style([vars.fonts.head02_28]);

export const orderButtonStyle = style({
  width: "fit-content",
});

export const orderBarStyle = style({
  width: "100%",
  height: "0.8rem",
  backgroundColor: vars.colors.black,
});

// 아코디언 전체 묶음
export const accordionContainer = style({
  width: "100%",
});
