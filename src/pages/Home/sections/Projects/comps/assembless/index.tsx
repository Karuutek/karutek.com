// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.
import image01 from '../../../../../../assets/dsadafasf.png';
import image02 from '../../../../../../assets/Untitled-2-Recovered.png';

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * AssemblessProject component.
 * @description This is the Assembless projects dialog.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const AssemblessProject = ({ className, style }: AssemblessProjectProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Box component="section">
        <Typography variant="h6" style={{width: "70%"}}>
          {translated.text01}
        </Typography>

        <Typography variant="h4" style={{marginTop: "52px"}}>assembless.tech</Typography>

        <Box display="flex" flexWrap="wrap" marginTop="8px" marginBottom="52px">
          <Typography variant="h6" style={{width: "38.5%", marginRight: "1.5%"}}>
            {translated.text02}
          </Typography>
          <img src={image01} alt="assembless.tech preview" className={classes.previewImage} />
          <img src={image02} alt="assembless.tech preview beta" className={classes.previewImage} />
          <Typography variant="h6" style={{width: "38.5%", marginLeft: "1.5%"}}>
            {translated.text03}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

// Props the component accepts.
type AssemblessProjectProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
AssemblessProject.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default AssemblessProject;