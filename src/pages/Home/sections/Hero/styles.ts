import { createStyles } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: any) => createStyles({
    root: {
        height: "100vh",
        paddingTop: 55,
        position: "relative"
    },
    logo: {
        fontWeight: 600,
        fontFamily: "'Josefin Sans', sans-serif",
        textTransform: "lowercase",
        fontSize: 42,
        color: theme.palette.primary.main,
        textAlign: "center",
        marginBottom: 25,
    },



    img: {
        width: 410,
        height: 410,
    },

    imgContainer: {
        background: `linear-gradient(transparent 10%, ${theme.palette.background.default} )`,
        position: 'absolute',
        bottom: 0,
        zIndex: 300,

        /* transform: 'translate(0,50%)', */

        width: '100%',
        height: 60,
    },
}));