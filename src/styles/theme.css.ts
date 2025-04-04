import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  colors: {
    // Lime colors
    lime01: "#F5FFE6",
    lime02: "#FBFFE2",
    lime03: "#DDFFC9",
    lime04: "#DAFFA3",
    lime05: "#D3FF5D",
    lime06: "#BEFF5F",
    lime07: "#78B100",
    lime08: "#4A6A08",

    // Alert colors
    alert01: "#FF5151",
    alert02: "#FF2E2E",
    alert03: "#D11C13",
    alert04: "#BA2017",
    alert05: "#9E1F19",

    // Gray scale
    black: "#0A0A0A",
    gray07: "#101114",
    gray06: "#1F2126",
    gray05: "#292F38",
    gray04: "#7B8598",
    gray03: "#D7E0EE",
    gray02: "#E7EDF8",
    gray01: "#FAFAFA",
    white: "#FFFFFF",
  },

  fonts: {
    // 한글 head
    head01_32: {
      fontFamily: "Pretendard",
      fontWeight: "700",
      fontSize: "3.2rem",
      lineHeight: "42px",
      letterSpacing: "-0.64px",
    },
    head02_28: {
      fontFamily: "Pretendard",
      fontWeight: "700",
      fontSize: "2.8rem",
      lineHeight: "36px",
      letterSpacing: "-0.56px",
    },
    head03_28_m: {
      fontFamily: "Pretendard",
      fontWeight: "500",
      fontSize: "2.8rem",
      lineHeight: "36px",
      letterSpacing: "-0.56px",
    },
    head04_22: {
      fontFamily: "Pretendard",
      fontWeight: "700",
      fontSize: "2.2rem",
      lineHeight: "30px",
      letterSpacing: "-0.44px",
    },
    head05_20: {
      fontFamily: "Pretendard",
      fontWeight: "700",
      fontSize: "2rem",
      lineHeight: "28px",
      letterSpacing: "-0.2px",
    },

    // 한글 body
    body01_24: {
      fontFamily: "Pretendard",
      fontWeight: "500",
      fontSize: "2.4rem",
      lineHeight: "30px",
      letterSpacing: "-0.48px",
    },
    body02_22: {
      fontFamily: "Pretendard",
      fontWeight: "600",
      fontSize: "2.2rem",
      lineHeight: "40px",
      letterSpacing: "-0.66px",
    },
    body03_20_36: {
      fontFamily: "Pretendard",
      fontWeight: "600",
      fontSize: "2rem",
      lineHeight: "36px",
      letterSpacing: "-1px",
    },
    body04_20_34: {
      fontFamily: "Pretendard",
      fontWeight: "600",
      fontSize: "2rem",
      lineHeight: "34px",
      letterSpacing: "-1px",
    },
    body05_20_24: {
      fontFamily: "Pretendard",
      fontWeight: "600",
      fontSize: "2rem",
      lineHeight: "24px",
      letterSpacing: "-0.4px",
    },
    body06_20_m_24: {
      fontFamily: "Pretendard",
      fontWeight: "500",
      fontSize: "2rem",
      lineHeight: "24px",
      letterSpacing: "0px",
    },
    body07_20_m_36: {
      fontFamily: "Pretendard",
      fontWeight: "500",
      fontSize: "2rem",
      lineHeight: "36px",
      letterSpacing: "-1px",
    },
    body08_18_sb: {
      fontFamily: "Pretendard",
      fontWeight: "600",
      fontSize: "1.8rem",
      lineHeight: "20px",
      letterSpacing: "0px",
    },
    body09_18_sb_narrow: {
      fontFamily: "Pretendard",
      fontWeight: "600",
      fontSize: "1.8rem",
      lineHeight: "20px",
      letterSpacing: "-0.36px",
    },
    body10_18_b: {
      fontFamily: "Pretendard",
      fontWeight: "700",
      fontSize: "1.8rem",
      lineHeight: "20px",
      letterSpacing: "0px",
    },
    body11_18_m: {
      fontFamily: "Pretendard",
      fontWeight: "500",
      fontSize: "1.8rem",
      lineHeight: "20px",
      letterSpacing: "0px",
    },

    // 영어
    eh0_head00_32_eb: {
      fontFamily: "SUIT",
      fontWeight: "800",
      fontSize: "3.2rem",
      lineHeight: "40px",
      letterSpacing: "-0.64px",
    },
    eh1_head01_32: {
      fontFamily: "SUIT",
      fontWeight: "700",
      fontSize: "3.2rem",
      lineHeight: "40px",
      letterSpacing: "-0.64px",
    },
    eh2_head02_28_b: {
      fontFamily: "SUIT",
      fontWeight: "700",
      fontSize: "2.8rem",
      lineHeight: "35px",
      letterSpacing: "-0.56px",
    },
    eh3_head03_24_eb: {
      fontFamily: "SUIT",
      fontWeight: "800",
      fontSize: "2.4rem",
      lineHeight: "30px",
      letterSpacing: "-0.48px",
    },
    eh4_head04_24_b: {
      fontFamily: "SUIT",
      fontWeight: "700",
      fontSize: "2.4rem",
      lineHeight: "30px",
      letterSpacing: "-0.48px",
    },
    eh5_head05_18: {
      fontFamily: "SUIT",
      fontWeight: "700",
      fontSize: "1.8rem",
      lineHeight: "22px",
      letterSpacing: "-0.36px",
    },
  },
});
