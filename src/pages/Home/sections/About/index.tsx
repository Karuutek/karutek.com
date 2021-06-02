// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography, Hidden } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.
import thumbnailImage from "../../../../assets/bench-accounting-nfTA8pdaq9A-unsplash.jpg"
import FloatingCard from "../../../../components/FloatingCard";

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
                  title="Hobby" 
                  content="I’m greatly determined to achieve my goals. Nothing can stop me." 
                  style={{top: "60%", left: "-65%", width: "400px"}} />

                <FloatingCard 
                  title="Art & Design" 
                  content="Art and design is in my spectrum of interest far as I can remember." 
                  style={{top: "75%", left: "78%", width: "400px"}} />

                <FloatingCard 
                  title="UI/UX Design" 
                  content="Art and design is in my spectrum of interest far as I can remember." 
                  style={{top: "25%", left: "-48%", width: "400px"}} />

                <FloatingCard 
                  title="Determination" 
                  content="I’m greatly determined to achieve my goals. Nothing can stop me." 
                  style={{top: "5%", left: "70%", width: "400px"}} />

                <FloatingCard 
                  title="Recreation" 
                  content="I’m greatly determined to achieve my goals. Nothing can stop me." 
                  style={{top: "25%", left: "90%", width: "400px"}} />

              </Box>
            </Box>
          </Box>
        </Hidden>

        <Hidden lgUp>
          <FloatingCard 
            title="Word of the Day" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu pulvinar dolor. Phasellus mollis maximus mauris a convallis." 
            style={{position: "relative", width: "100%", marginBottom: 12}} />
          <FloatingCard 
            title="Word of the Day" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu pulvinar dolor. Phasellus mollis maximus mauris a convallis." 
            style={{position: "relative", width: "100%", marginBottom: 12}} />
          <FloatingCard 
            title="Word of the Day" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu pulvinar dolor. Phasellus mollis maximus mauris a convallis." 
            style={{position: "relative", width: "100%", marginBottom: 12}} />
          <FloatingCard 
            title="Word of the Day" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu pulvinar dolor. Phasellus mollis maximus mauris a convallis." 
            style={{position: "relative", width: "100%", marginBottom: 12}} />
          <FloatingCard 
            title="Word of the Day" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu pulvinar dolor. Phasellus mollis maximus mauris a convallis." 
            style={{position: "relative", width: "100%", marginBottom: 12}} />
        </Hidden>
      </Box>
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