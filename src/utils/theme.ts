// Default theme can be found here: https://material-ui.com/customization/default-theme/
import { createMuiTheme } from "@material-ui/core";

export const LIGHT_THEME = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: "#598F80"
        },
        background: {
            default: "#F3F3F3",
            paper: "#F3F3F3",
        }
    },
    typography: {
        fontFamily: "'Quicksand', sans-serif"
    },
    overrides: {
        MuiTypography: {
            paragraph: {
                fontFamily: "'Quicksand', sans-serif"
            },
            h5: {
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 600
            },
            h4: {
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 600
            },
            h3: {
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 600
            },
            h2: {
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 600
            },
            h1: {
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 600
            },
        },
    }
});

export const DARK_THEME = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#598F80"
        }
    }
});