// Deps scoped imports.
import React, {useState} from "react";
import { makeStyles, Box, Typography, Button, Container, Hidden } from "@material-ui/core";
import { useLittera } from "@assembless/react-littera";
import cx from "classnames";

// Project scoped imports.
import photoPicture from "../../../../assets/106993419_4489704961099888_1937973486739651086_n-removebg-preview.png"
import rightLeave from "../../../../assets/F_1.svg";
import leftLeave from "../../../../assets/F_2.svg";

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

    const scrollIntoAnchor = (id: string) => () => {
        document.querySelector(`#${id}`)?.scrollIntoView({ 
            behavior: 'smooth' 
          });
    }

    return <>
        <Container maxWidth="md">
            <Box className={cx(classes.root, props.className)} style={props.style} display="flex" flexDirection="column" justifyContent="space-between">
                <Box style={{height: "160px"}}>
                    <Typography className={classes.logo}>{translated.logo}</Typography>

                    <Box display="flex" justifyContent="center" style={{ marginBottom: 162 }}>
                        <Button variant="text" style={{ fontSize: 16, textTransform: "lowercase", fontWeight: 500 }} onClick={scrollIntoAnchor("projects")} >{translated.projects}</Button>
                        <Button variant="text" style={{ fontSize: 16, textTransform: "lowercase", fontWeight: 500, margin: '0 37px' }} onClick={scrollIntoAnchor("about")} >{translated.about}</Button>
                        <Button variant="text" style={{ fontSize: 16, textTransform: "lowercase", fontWeight: 500 }} onClick={scrollIntoAnchor("contact")} >{translated.contact}</Button>
                    </Box>
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center" style={{margin: "auto 0"}} >
                    <Box style={{ marginLeft: 198, borderRadius: "50%", width: 357, height: 357, backgroundColor: "#598F80", position: 'relative' }}>
                        <Box style={{ position: 'absolute', left: -237, top: '22.5%', zIndex: 9999, }}>
                            <Typography style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: 72 }} variant="h1" color="primary">
                                Karolin<span style={{ color: '#fff' }}>a</span><br />Falkow<span style={{ color: '#fff' }}>ska</span></Typography>
                            <Typography variant='h3' color='primary' style={{ fontSize: 36, fontWeight: 400, letterSpacing: 0.8 }}>Junior UX/UI D<span style={{ color: '#fff' }}>esigner</span></Typography>
                            <Box>
                                <Button className={classes.bigBtn} color='primary' onClick={scrollIntoAnchor("about")} variant='contained'>{translated.callToActionBtn}</Button>
                                <Typography style={{ color: "rgb(109 107 107)", marginTop: "1rem" }}>{translated.or} <Typography color="primary" style={{ display: "inline-block", textDecoration: "underline" }}><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1Y_uZNM2FnS2Vi3a5nQsG1Ig9sSZYsJ82/view?usp=sharing">{translated.hireMe}</a></Typography> {translated.rightAway}.</Typography>
                            </Box>
                        </Box>
                        <Box style={{ position: 'absolute', top: -42, left: 0, zIndex: 1 }}>
                            <Box style={{ position: 'relative' }}>
                                <img src={photoPicture} className={classes.img} />
                                <Box className={classes.imgContainer} />
                            </Box>
                        </Box>

                    </Box>

                </Box>
            </Box>
            <Hidden mdDown>
                <img src={rightLeave} style={{ position: 'absolute', right: 0, top: 0 }} />
                <img src={leftLeave} style={{ position: 'absolute', left: 0, top: 200 }} />
            </Hidden>
        </Container>
    </>
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