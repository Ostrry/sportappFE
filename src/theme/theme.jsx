// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#0084ff",
        },
        secondary: {
            main: "#ff9800",
        },
        warning: {
            main: "#ff9800",
        },
        text: {
            primary: "#1a203c",
            secondary: "rgba(26,32,60,0.85)",
        },
    },
    typography: {
        fontFamily:
            '"Barlow", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        h1: {
            fontSize: "3rem",
            fontWeight: 800,
        },
        h4: {
            fontSize: "2.25rem",
            fontWeight: 800,
        },
        body1: {
            fontSize: "1rem",
        },
    },
    spacing: 8, // 1 spacing unit = 8px
});

export default theme;
