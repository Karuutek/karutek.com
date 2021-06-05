import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      height: "100vh",
    },
    title: {
      marginBottom: "54px",
      textAlign: "center",
    },

    /** Mobile view */
    [theme.breakpoints.down("sm")]: {
      title: {
        marginBottom: theme.spacing(2),
      }
    }
  });

export default styles;