// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography, Container } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.
import LogoCube from '../../../../components/LogoCube';
import ProjectDialog from '../../../../components/ProjectDialog';
import GiventLogo from '../../../../assets/givent_logo.png'
import AssemblessLogo from '../../../../assets/assembless_logo.png'
import MacrentsLogo from '../../../../assets/macrents_logo.png'
import FlavaLogo from '../../../../assets/flava_logo.png'

// Component scoped imports.
import styles from './styles';
import translations from './trans';
import PhysiomedicaProject from './comps/physiomedica/';
import GiventProject from './comps/givent/';
import FlavaProject from './comps/flava/';
import AssemblessProject from './comps/assembless/';

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
    <Container id="projects" maxWidth="md" className={cx(classes.root, className)} style={style}>
      <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">

        <Box>
          <Typography variant="h2" color="primary" className={classes.title}>
            {translated.title}
          </Typography>

          <Box display="flex" justifyContent="center" width="100%">
            <Box display="flex" flexWrap="wrap" justifyContent="flex-start" width="100%" className={classes.projectListWrapper}>
              {
                PROJECTS_LIST.map(project => 
                    <ProjectDialog key={project.id + "_dialog"} trigger={<LogoCube src={project.logo} alt={project.name} color={project.color} key={project.id} />} project={project}>
                      {project.comp}
                    </ProjectDialog>
                  )
              }
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

const PROJECTS_LIST = Object.freeze([
  { id: "physiomedica",   name: "Physiomedica", color: "#80CBC4", logo: "https://i.imgur.com/3XnTTLW.png",    comp: <PhysiomedicaProject />,  contrastColor: "#FFF" },
  { id: "givent",         name: "Givent",       color: "#353642", logo: GiventLogo,                           comp: <GiventProject />,        contrastColor: "#FFF" },
  { id: "assembless",     name: "Assembless",   color: "#000",    logo: AssemblessLogo,                       comp: <AssemblessProject />,    contrastColor: "#FFF" },
  { id: "flava",          name: "Flava",        color: "#FFF",    logo: FlavaLogo,                            comp: <FlavaProject />,         contrastColor: "#000" },
  // { id: "macrents",       name: "MacRents",     color: "#212121", logo: MacrentsLogo,                         comp: <PhysiomedicaProject />,  contrastColor: "#FFF" },
  // { id: "smartoak",       name: "Smart Oak",    color: "#DADADA", logo: "https://source.unsplash.com/random", comp: <PhysiomedicaProject />,  contrastColor: "#FFF" },
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