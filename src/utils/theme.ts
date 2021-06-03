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
    shape: {
        borderRadius: 6,
    },
    typography: {
        fontFamily: "'Quicksand', sans-serif"
    },
    overrides: {
        MuiInputLabel: {
            focused: {
                color: "#598F80",
                fontWeight: "bold"
            },
        },
        MuiOutlinedInput: {
            root: {
                '& fieldset': {
                    borderColor: '#598F80',
                    borderWidth: 2
                  },
                  '&:hover fieldset': {
                    borderColor: '#598F80',
                    borderWidth: 2
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#598F80',
                    borderWidth: 2
                  }
            },
        },
        MuiPaper: {
            elevation24: {
                boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 5%), 0px 24px 38px 3px rgb(0 0 0 / 8%), 0px 9px 46px 8px rgb(0 0 0 / 7%)"
            }
        },
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