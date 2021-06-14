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
      cursor: "pointer",
      maxWidth: "100vw",

      transition: "filter 155ms ease",
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
      transform: "translate(-50%, -50%)",
      userSelect: "none"
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