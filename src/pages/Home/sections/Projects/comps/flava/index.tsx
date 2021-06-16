// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.
import introGif from '../../../../../../assets/out.gif';

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Flava component.
 * @description This is the Flava project description dialog.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const FlavaProject = ({ className, style }: FlavaProjectProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <img className={classes.video} src={introGif} alt="Introduction gif" />
      <Typography variant="h3" style={{margin: "5rem 0", textAlign: "center"}}>{translated.more}</Typography>
    </Box>
  );
};

// Props the component accepts.
type FlavaProjectProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
FlavaProject.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default FlavaProject;