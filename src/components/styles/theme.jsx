import { createTheme } from "@mui/material";
import {
  BG_COLOR,
  ERROR_LIGHT,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SUCCESS_LIGHT,
  TEXT_PRIMARY_COLOR,
  TEXT_SECONDARY_COLOR,
} from "./constants";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
    text: {
      primary: TEXT_PRIMARY_COLOR,
      secondary: TEXT_SECONDARY_COLOR,
    },
    background: {
      default: BG_COLOR,
    },
    error: {
      light: ERROR_LIGHT,
      main: "#f44336",
      dark: "#d32f2f",
    },
    success: {
      light: SUCCESS_LIGHT,
      main: "#66bb6a",
      dark: "#388e3c",
    },
  },
  typography: {
    h1: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: "1.5rem",
    },
    h3: {
      fontSize: "1.15rem",
      fontWeight: 600,
      lineHeight: "1.35rem",
    },
    h6: {
      fontSize: "1.05rem",
      fontWeight: 600,
      lineHeight: "1.15rem",
    },
  },
  shape: {
    borderRadius: "8px",
  },
});

export default defaultTheme;
