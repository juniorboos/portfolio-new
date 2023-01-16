import { styled } from "~stitches";

const Typography = styled("p", {
  color: "$textPrimary",
  fontSize: "$m",

  variants: {
    color: {
      primary: { color: "$textPrimary" },
      secondary: { color: "$textSecondary" },
      accent: { color: "$textAccent" },
    },
    size: {
      s: { fontSize: "$s" },
      m: { fontSize: "$m" },
      l: { fontSize: "$l" },
      xl: { fontSize: "$xl" },
    },
    weight: {
      regular: { fontWeight: "$regular" },
      thin: { fontWeight: "$thin" },
      bold: { fontWeight: "$bold" },
    },
  },
});

export { Typography };
