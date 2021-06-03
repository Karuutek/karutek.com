import { createStyles, Theme } from '@material-ui/core/styles';
// Here we define styles for the component.

const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    },
    title: {
      marginBottom: "54px",
    },
    imageWrapper: {
      width: 527,
      height: 527,
      borderRadius: 527,
      border: `4px solid ${theme.palette.primary.main}`,
      overflow: "hidden",
      position: "relative"
    },
    image: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "auto",
      height: "100%",
    },
    floatingCardsContainer: {
      width: 527,
      height: 527,
      transform: "translate(-50%, -50%)"
    },

    /** Mobile view */
    [theme.breakpoints.down("sm")]: {
      title: {
        marginBottom: theme.spacing(2),
      }
    }
  });

export default styles;