import { createStyles } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: any) => createStyles({
    root: {
        minHeight: "100vh",
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
        paddingTop: theme.spacing(4)
    },
    bigBtn: { 
        padding: "13px 46px", 
        fontSize: "22px", 
        lineHeight: 1.3, 
        marginTop: 85, 
        borderRadius: "100px" 
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