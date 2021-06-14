// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.
import image01 from "../../../../../../assets/macrents 2.png"
import image02 from "../../../../../../assets/macrents garfika 1.png"
import image03 from "../../../../../../assets/macrents grafika2 1.png"
import image04 from "../../../../../../assets/screencapture-drfr0st-github-io-macrents-pl-2021-06-14-20_44_15 1.png"

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * MacrentsProject component.
 * @description This section is for MacRents
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const MacrentsProject = ({ className, style }: MacrentsProjectProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Box >
        <Typography className={classes.text + " " + classes.shortedText} style={{margin: "4rem 0"}}>
          {translated.text01}
        </Typography>
        <img src={image01} className={classes.img} />
      </Box>

      <Box>
        <Typography className={classes.text + " " + classes.shortedText} style={{ margin: "4rem 0 4rem auto" }}>
          {translated.text02}
        </Typography>
        <img src={image02} className={classes.img} />
      </Box>

      <Box >
        <Typography className={classes.text + " " + classes.shortedText} style={{margin: "4rem 0"}}>
          {translated.text03}
        </Typography>
        <img src={image03} className={classes.img} />
      </Box>

      <Box >
        <Typography className={classes.text + " " + classes.shortedText} style={{margin: "4rem 0"}}>
          {translated.text04}
        </Typography>
        <img src={image04} className={classes.img} />
      </Box>
    </Box>
  );
};

// Props the component accepts.
type MacrentsProjectProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
MacrentsProject.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default MacrentsProject;