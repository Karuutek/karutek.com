// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography, Container } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.
import LogoCube from '../../../../components/LogoCube';

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Projects component.
 * @description This is the Projects section.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Projects = ({ className, style }: ProjectsProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={cx(classes.root, className)} style={style}>
      <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">

        <Box>
          <Typography variant="h2" color="primary" className={classes.title}>
            {translated.title}
          </Typography>

          <Box display="flex" justifyContent="center" width="100%">
            <Box display="flex" flexWrap="wrap" justifyContent="flex-start" width="100%">
              {
                PROJECTS_LIST.map(project => <LogoCube src={project.logo} alt={project.name} key={project.id} />)
              }
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

const PROJECTS_LIST = Object.freeze([
  { id: "physiomedica", name: "Physiomedica", logo: "https://i.imgur.com/3XnTTLW.png" },
  { id: "givent", name: "Givent" },
  { id: "assembless", name: "Assembless" },
  { id: "macrents", name: "MacRents" },
]);

// Props the component accepts.
type ProjectsProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
Projects.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default Projects;