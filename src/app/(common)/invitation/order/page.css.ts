import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const orderPageLayout = style([
  flexGenerator("column"),
  {
    gap: "2.8rem",
    width: "100%",
    marginTop: "10rem",
    marginBottom: "16rem",
  },
]);

// 청첩장 주문하기 상단 부분
export const titleContainer = style([
  flexGenerator("column"),
  {
    position: "sticky",
    top: "0rem",
    zIndex: "1",
    width: "100%",
    gap: "2.8rem",
    paddingTop: "2.8rem",
    backgroundColor: vars.colors.gray01,
  },
]);

export const titleWrapper = style([
  flexGenerator("row", "space-between"),
  {
    width: "87.2rem",
  },
]);

export const titleTextStyle = style([vars.fonts.head02_28]);

export const orderButtonStyle = style({
  width: "fit-content",
});

export const orderBarStyle = style({
  width: "87.2rem",
  height: "0.8rem",
  backgroundColor: vars.colors.black,
});

// 아코디언 전체 묶음
export const accordionContainer = style([
  flexGenerator("column"),
  {
    width: "87.2rem",
    gap: "3rem",
  },
]);
