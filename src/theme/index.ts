import { createTheme } from "@mui/material";

export const ThemeRick = createTheme({
  palette: {
    mode: "dark",
    background: {
      default:
        "linear-gradient(304deg, rgba(105,255,31,1) 0%, rgba(0,252,107,1) 10%, rgba(18,201,142,1) 24%, rgba(33,158,172,1) 42%, rgba(80,135,203,1) 53%, rgba(79,148,188,1) 59%, rgba(79,145,191,1) 68%, rgba(69,215,108,1) 88%, rgba(63,254,61,1) 100%)",
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
