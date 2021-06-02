// Deps scoped imports.
import React from 'react';
import { makeStyles, Typography, Card, CardHeader, CardContent } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * FloatingCard component.
 * @description A floating card component.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const FloatingCard = ({ className, style, content, title }: FloatingCardProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Card className={cx(classes.root, className)} style={style} elevation={24}>
      <CardContent>
        <Typography color="primary" gutterBottom style={{ fontFamily: "'Josefin Sans', sans-serif", opacity: 0.6 }}>
          {title}
        </Typography>
        <Typography>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Props the component accepts.
type FloatingCardProps = {
  className?: string;
  style?: React.CSSProperties;
  title: string;
  content: string;
};

// Default props.
FloatingCard.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default FloatingCard;