import { createTheme } from "@mui/material/styles";

const themeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#fdd835",
      contrastText: "#212121",
    },
    secondary: {
      main: "#0097a7",
    },
    background: {
      default: "#2b282a",
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
