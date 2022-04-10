import { createTheme } from "@mui/material";

export const ThemeRick = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
    primary: {
      main: "#6ebf23",
      light: "#ecf271",
      dark: "#338639",
      contrastText: "#bb0",
    },
    secondary: {
      main: "#292669",
      light: "#2b67ab",
      dark: "#1e1848",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#d2218b",
      light: "#f292ac",
      dark: "#4b318c",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#4CAF50",
      light: "#7BC67E",
      dark: "#3B873E",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#F44336",
      light: "#F88078",
      dark: "#E31B0C",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FF9800",
      light: "#FFB547",
      dark: "#C77700",
      contrastText: "#FFFFFF",
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
      ],
    },
  },
});
