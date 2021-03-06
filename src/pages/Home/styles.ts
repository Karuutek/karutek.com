import { createStyles } from "@material-ui/core/styles";
// Here we define styles for the component.

export default ((theme: any) => createStyles({
    root: {
        // Container styles...
    },
    h4: {
        // Head text styles...
        color: theme.palette.primary
    },
    spacing: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
    }
}));