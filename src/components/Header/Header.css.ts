import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const headerWrapper = style([
  flexGenerator("row", "flex-start", "center"),
  {
    position: "fixed",
    top: "0",
    width: "100%",
    padding: "2.5rem 13.1rem 2.5rem 14.2rem",

    zIndex: "1",

    backgroundColor: "transparent",
    transition: "background-color 0.2s ease-in-out",
  },
]);

export const headerWrapperScrolled = style({
  backgroundColor: vars.colors.black,
  transition: "background-color 0.2s ease-in-out",
});

// 추후 로고 나오면 수정 예정
export const headerLogoStyle = style({
  width: "12rem",
  height: "5rem",
  backgroundColor: "white",
});

export const tabBarSection = style({
  width: "59.6rem",
  marginLeft: "6rem",
});

export const buttonSection = style({
  width: "10.2rem",
  marginLeft: "auto",
});
