import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(6)
    },
    text: {
      marginBottom: theme.spacing(4),
      whiteSpace: "pre-wrap",
    },
    shortedText: {
      width: "60%"
    },
    img: {
      width: "100%",
      height: "auto"
    },

    /** Mobile view */
    [theme.breakpoints.down("sm")]: {
      text: {
        marginBottom: theme.spacing(2),
      },
      shortedText: {
        width: "100%"
      },
    }
  });

export default styles;