import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    title: {
      marginBottom: theme.spacing(4),
    },
    contactCard: { alignSelf: "flex-end", paddingLeft: "10%", backgroundColor: theme.palette.background.default, borderRadius: theme.shape.borderRadius, padding: theme.spacing(2) },
    fieldsWrapper: {
      width: "60%"
    },

    /** Mobile view */
    [theme.breakpoints.down("sm")]: {
      title: {
        marginBottom: theme.spacing(2),
      },
      fieldsWrapper: {
        width: "100%"
      },
      contactCard: {
        width: "100%",
      }
    }
  });

export default styles;