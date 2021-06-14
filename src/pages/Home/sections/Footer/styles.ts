import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    title: {
      marginBottom: 0
    },
    inputLabel: {
      color: theme.palette.primary.main
    },

    /** Mobile view */
    [theme.breakpoints.down("sm")]: {
      title: {
        marginBottom: theme.spacing(2),
      }
    }
  });

export default styles;