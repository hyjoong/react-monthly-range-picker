import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: "gainsboro",
      gray500: "lightgray",
      white: "#FFFFFF",
      red: "#F04438",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
});
