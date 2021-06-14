import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(6),
    },
    title: {
      marginBottom: theme.spacing(4),
    },
    
    previewImage: {
      width: "60%",
      height: "auto",
      marginBottom: theme.spacing(3),

      "&:last-child": {
        marginLeft: "40%"
      }
    },
    /** Mobile view */
    [theme.breakpoints.down("sm")]: {
      title: {
        marginBottom: theme.spacing(2),
      }
    }
  });

export default styles;