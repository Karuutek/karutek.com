// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography, ButtonBase } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * LogoCube component.
 * @description This is a square with a logo fitted inside.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const LogoCube = ({ className, style, src, alt, color }: LogoCubeProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <ButtonBase style={{ margin: "8px" }}> 
      <Box className={cx(classes.root, className)} style={{ ...style, backgroundColor: color }} display="flex" alignItems="center" justifyContent="center">
        {
          src ?
            <img className={classes.image} src={src} alt={alt} draggable={false} />
            : 
            <Typography variant="h5" color="primary" className={classes.title}>
              {alt}
          </Typography>
        }
      </Box>
    </ButtonBase>
  );
};

// Props the component accepts.
type LogoCubeProps = {
  className?: string;
  style?: React.CSSProperties;
  src?: string;
  alt: string;
  color?: string
};

// Default props.
LogoCube.defaultProps = {
  className: ``,
  style: {},
  src: undefined
};

// Time to export! 🚚
export default LogoCube;