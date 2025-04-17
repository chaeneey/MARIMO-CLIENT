import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const footerStyle = style([
  flexGenerator("row", "space-between"),
  {
    width: "100%",
    height: "20rem",

    padding: "0 13.7rem",

    backgroundColor: vars.colors.black,
  },
]);

// 로고 이미지 나오면 수정할 예정
export const logoStyle = style({
  width: "30rem",
  height: "9rem",

  color: vars.colors.white,

  border: `1px solid ${vars.colors.gray01}`,
});

export const footerCenter = style([
  vars.fonts.caption_01_22,
  flexGenerator(),
  {
    gap: "3rem",
    color: vars.colors.gray02,
  },
]);
export const dividerStyle = style({
  width: "0.1rem",
  height: "3rem",

  backgroundColor: vars.colors.gray03,
});

export const snsIconWrapper = style([
  flexGenerator(),
  {
    gap: "2rem",
  },
]);

export const iconStyle = style({
  width: "4.8rem",
  height: "4.8rem",
});
