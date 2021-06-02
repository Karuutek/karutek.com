// Deps scoped imports.
import React from "react";
import { makeStyles, Container, Typography, Box } from "@material-ui/core";
import { useLittera } from "@assembless/react-littera";
import cx from "classnames";

// Project scoped imports.

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

import Hero from './sections/Hero/';

/**
 * Home component
 * @description This is the main view.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Home = (props: ComponentProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    return <Container maxWidth="sm" className={cx(classes.root, props.className)} style={props.style}>
        <Hero />
    </Container>
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