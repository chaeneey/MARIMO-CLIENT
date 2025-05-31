import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";

export const invitationProductsSection = style([
  flexGenerator(),
  {
    width: "100%",
    gap: "4.6rem",
    marginTop: "9.8rem",
  },
]);
