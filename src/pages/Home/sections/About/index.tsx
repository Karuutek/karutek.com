// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography, Hidden, Container } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.
import thumbnailImage from "../../../../assets/bench-accounting-nfTA8pdaq9A-unsplash.jpg"
import FloatingCard from "../../../../components/FloatingCard";
import flowerImage01 from "../../../../assets/1639__0000s_0007_F_7 1.png";
import flowerImage02 from "../../../../assets/1639__0000s_0003_F_3 1.png";

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * About component.
 * @description This is the about me section component.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const About = ({ className, style }: AboutProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles(); 

  return (
    <Box width="100%" position="relative" id="about">
    <Container maxWidth="md" style={{position: "relative", zIndex: 7}}>

      <Box className={cx(classes.root, className)} style={style}>
        <Box width="100%">
          <Typography variant="h2" color="primary" className={classes.title}>
            {translated.title}
          </Typography>

          <Hidden mdDown>
            <Box width="100%" display="flex" alignItems="center" justifyContent="center">
              <Box position="relative">
                <Box className={classes.imageWrapper}>
                  <img src={thumbnailImage} className={classes.image} />
                </Box>

                <Box position="absolute" top="50%" left="50%" className={classes.floatingCardsContainer}>
                  <FloatingCard 
                    title={translated.title01}
                    content={translated.content01}
                    style={{top: "60%", left: "-65%", width: "400px"}} />

                  <FloatingCard 
                    title={translated.title02}
                    content={translated.content02}
                    style={{top: "75%", left: "78%", width: "400px"}} />

                  <FloatingCard 
                    title={translated.title03}
                    content={translated.content03}
                    style={{top: "25%", left: "-48%", width: "400px"}} />

                  <FloatingCard 
                    title={translated.title04}
                    content={translated.content04}
                    style={{top: "0%", left: "70%", width: "400px"}} />

                  <FloatingCard 
                    title={translated.title05}
                    content={translated.content05}
                    style={{top: "25%", left: "90%", width: "400px"}} />

                </Box>
              </Box>
            </Box>
          </Hidden>

          <Hidden lgUp>
            <FloatingCard 
              title={translated.title01}
              content={translated.content01}
              style={{position: "relative", width: "100%", marginBottom: 12}} />
            <FloatingCard 
              title={translated.title02}
              content={translated.content02}
              style={{position: "relative", width: "100%", marginBottom: 12}} />
            <FloatingCard 
              title={translated.title03}
              content={translated.content03}
              style={{position: "relative", width: "100%", marginBottom: 12}} />
            <FloatingCard 
              title={translated.title04}
              content={translated.content04}
              style={{position: "relative", width: "100%", marginBottom: 12}} />
            <FloatingCard 
              title={translated.title05}
              content={translated.content05}
              style={{position: "relative", width: "100%", marginBottom: 12}} />
          </Hidden>
        </Box>
      </Box>
    </Container>

    <Hidden mdDown>
      <img src={flowerImage02} style={{ position: 'absolute', right: 0, top: 0, zIndex: 5 }} />
      <img src={flowerImage01} style={{ position: 'absolute', left: 0, top: 350, zIndex: 5 }} />
    </Hidden>
    </Box>
  );
};

// Props the component accepts.
type AboutProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
About.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default About;