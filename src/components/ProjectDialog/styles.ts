import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
    },
    title: {
      marginBottom: theme.spacing(4),
    },
    header: {
      width: "100%",
      height: "240px",

    },

    logoWrapper: {
      position: "relative",
      height: "100%",
      width: "50%", /* change here to make the logo appear bigger/smaller */
      overflow: "hidden"
    },
    logo: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",

      height: "auto", 
      width: "100%"
    },

    /** Mobile view */
    [theme.breakpoints.down("sm")]: {
      title: {
        marginBottom: theme.spacing(2),
      }
    }
  });

export default styles;