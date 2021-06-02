import { createStyles } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: any) => createStyles({
    root: {
        height: "100vh",
        paddingTop: 64
    },
    logo: {
        fontWeight: 600,
        fontFamily: "'Josefin Sans', sans-serif",
        textTransform: "lowercase",
        fontSize: 42,
        color: theme.palette.primary.main,
        textAlign: "center",
        marginBottom: "47px"
    }
}));