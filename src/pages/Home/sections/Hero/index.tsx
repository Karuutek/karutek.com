// Deps scoped imports.
import React from "react";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import { useLittera } from "@assembless/react-littera";
import cx from "classnames";

// Project scoped imports.
import photoPicture from "../../../../assets/106993419_4489704961099888_1937973486739651086_n-removebg-preview.png"

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Hero section component.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Hero = (props: HeroProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    const handleNavigation = (id: string) => () => {
        console.log("Scrolling to:", id)
    }

    return <Box className={cx(classes.root, props.className)} style={props.style}>
        <Box>
            <Typography className={classes.logo}>{translated.logo}</Typography>

            <Box display="flex" justifyContent="center">
                <Button variant="text" style={{ marginRight: 50, textTransform: "lowercase", fontWeight: 500 }} onClick={handleNavigation("projects")}>projects</Button>
                <Button variant="text" style={{ textTransform: "lowercase", fontWeight: 500 }} onClick={handleNavigation("about")}>about me</Button>
                <Button variant="text" style={{ marginLeft: 50, textTransform: "lowercase", fontWeight: 500 }} onClick={handleNavigation("contact")}>contact</Button>
            </Box>
        </Box>

        <Box display="flex" justifyContent="center">
            <Box style={{marginRight: -100}}>
                <Typography variant="h3" component="h1" color="primary">Karolina<br/>Falkowska</Typography>
            </Box>
            <Box style={{ borderRadius: "410px", minWidth: "410px", minHeight: "410px", backgroundColor: "#598F80", mixBlendMode: "difference" }}>
                <img src={photoPicture} />
            </Box>
        </Box>
    </Box>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type HeroProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Hero;