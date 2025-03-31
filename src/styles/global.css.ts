import { globalFontFace, globalStyle } from "@vanilla-extract/css";

import { base } from "./layers.css";
import "./reset.css";

// :root 변수 정의
globalStyle(":root", {
  "@layer": {
    [base]: {
      vars: {
        "--min-width": "375px",
        "--max-width": "700px",
      },
    },
  },
});

// HTML, Body 스타일
globalStyle("html, body", {
  "@layer": {
    [base]: {
      fontSize: "62.5%",
      scrollbarWidth: "none",
      margin: 0,
      padding: 0,
      width: "100%",
      scrollBehavior: "smooth",
      overscrollBehavior: "none",
      WebkitTapHighlightColor: "transparent",
    },
  },
});

// 폰트 설정
globalStyle("body", {
  fontFamily: `'Pretendard', 'SUIT', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
});

globalFontFace("Pretendard", {
  src: 'url("/fonts/PretendardVariable.woff2") format("woff2-variations")',
});

globalFontFace("SUIT", {
  src: 'url("/fonts/SUIT-Variable.woff2") format("woff2-variations")',
});

// A 태그 스타일
globalStyle("a", {
  "@layer": {
    [base]: {
      textDecoration: "none",
      color: "inherit",
    },
  },
});

// Select 태그 스타일
globalStyle("select", {
  "@layer": {
    [base]: {
      background: "#fff",
    },
  },
});

// U 태그 스타일
globalStyle("u", {
  "@layer": {
    [base]: {
      textDecorationLine: "underline",
      textUnderlinePosition: "from-font",
    },
  },
});

// #root 스타일
globalStyle("#root", {
  "@layer": {
    [base]: {
      width: "100%",
      minWidth: "var(--min-width)",
      maxWidth: "var(--max-width)",
      minHeight: "100dvh",
      backgroundColor: "#fff",
      margin: "0 auto",
      boxShadow: "0 0 2px rgba(0, 0, 0, 0.4)",
    },
  },
});

// Webkit 스크롤바 숨기기
globalStyle("::-webkit-scrollbar", {
  "@layer": {
    [base]: {
      display: "none",
    },
  },
});
