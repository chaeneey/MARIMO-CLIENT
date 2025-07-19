import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const tabStyle = style([
  flexGenerator("row", "space-between"),
  {
    position: "relative",
    width: "100%",
    paddingBottom: "0.5rem",
  },
]);

export const tabButton = recipe({
  base: [
    vars.fonts.eh4_head04_24_b,
    {
      display: "flex",
      width: "100%",
    },
  ],
  variants: {
    tabType: {
      headerTab: {
        color: vars.colors.lime09,
      },
      productTab: {
        color: vars.colors.gray03,
      },
    },
  },
});

export const clickTab = recipe({
  base: [vars.fonts.eh3_head03_24_eb, {}],
  variants: {
    tabType: {
      headerTab: {
        color: vars.colors.lime04,
      },
      productTab: {
        color: vars.colors.black,
      },
    },
  },
});

export const tabIndicator = recipe({
  base: {
    position: "absolute",
    bottom: "-0.5rem",
    width: "100%",
    transition: "left 0.3s ease, width 0.3s ease",
  },
  variants: {
    tabType: {
      headerTab: {
        height: "0.5rem",
        backgroundColor: vars.colors.lime04,
      },
      productTab: {
        height: "0.5rem",
        backgroundColor: vars.colors.black,
      },
    },
  },
});
