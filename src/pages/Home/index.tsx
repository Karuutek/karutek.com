// Deps scoped imports.
import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import { useLittera } from "@assembless/react-littera";
import cx from "classnames";

// Project scoped imports.

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

import Hero from './sections/Hero/';
import About from './sections/About/';
import Projects from './sections/Projects/';
import Contact from './sections/Contact/';
import Footer from './sections/Footer/';

/**
 * Home component
 * @description This is the main view.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Home = (props: ComponentProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    return <Box className={cx(classes.root, props.className)} style={props.style}>
        <Hero className={classes.spacing} style={{marginTop: '0'}} />
        <About className={classes.spacing} />
        <Projects className={classes.spacing} />
        <Contact className={classes.spacing} />
        <Footer />
    </Box>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type ComponentProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Home;