import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.palette.background.default,
      minHeight: "100vh",
    },
    title: {
      marginBottom: "54px",
      textAlign: "center",
    },
    projectListWrapper: {

    },

    /** Mobile view */
    [theme.breakpoints.down("sm")]: {
      title: {
        marginBottom: theme.spacing(2),
      },
      projectListWrapper: {
        justifyContent: "center"
      }
    }
  });

export default styles;