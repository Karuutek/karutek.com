import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: theme.breakpoints.width("sm") / 2.2,
      height: theme.breakpoints.width("sm") / 2.2,
      position: "relative",
      overflow: "hidden",
      margin: theme.spacing(1),
      cursor: "pointer",
      opacity: 0.85,

      transition: "opacity 155ms ease",

      "&:hover": {
        opacity: 1
      }
    },
    title: {
      margin: 0
    },
    image: {
      width: "100%",
      height: "auto",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    },

    /** Mobile view */
    [theme.breakpoints.down("sm")]: {
      root: {
        width: theme.breakpoints.width("sm"),
        height: theme.breakpoints.width("sm"),
      }
    }
  });

export default styles;