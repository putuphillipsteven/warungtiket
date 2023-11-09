import { extendTheme } from "@chakra-ui/react";
import { colors } from "./color";
import { fonts } from "./fonts";
const theme = extendTheme({
  fonts,
  colors,
  breakpoints: {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  borderRadius: {
    radii: {
      none: "0",
      sm: "0.125em",
      base: "0.25em",
      md: "0.375em",
      lg: "0.5em",
      xl: "0.75em",
      "2xl": "1em",
      "3xl": "1.5em",
      full: "9999px",
    },
  },
});

export default theme;
