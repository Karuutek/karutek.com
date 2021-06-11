// Deps scoped imports.
import React, {useState} from 'react';
import { makeStyles, Box, Typography, IconButton, Dialog, Slide, Icon, Container } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';
// eslint-disable-next-line no-restricted-imports
import CloseIcon from '@material-ui/icons/Close';
// eslint-disable-next-line no-restricted-imports
import { TransitionProps } from '@material-ui/core/transitions/transition';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

/**
 * ProjectDialog component.
 * @description Customized DIalog component for project showcase.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const ProjectDialog = ({ className, style, children, trigger, project }: ProjectDialogProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const translated = useLittera(translations);
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Box onClick={handleOpen}>
        {trigger}
      </Box>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition as any}>
        <Box className={classes.header} style={{backgroundColor: project.color}}>
          <Container>
            <Box display="flex" justifyContent="space-between" height="240px">
              <div>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
              </div>

              <div className={classes.logoWrapper}>
                <img src={project.logo} alt={project.name} className={classes.logo} />
              </div>

              <div>{/* Just a little flex hack... */}</div>
            </Box>
          </Container>
        </Box>
        
        <Container style={{ marginTop: "8%" }}>
          {children}
        </Container>
      </Dialog>
    </Box>
  );
};

// Props the component accepts.
type ProjectDialogProps = {
  className?: string;
  style?: React.CSSProperties;
  children: JSX.Element | JSX.Element[];
  trigger: JSX.Element;
  project: { id: string, name: string, logo?: string, color: string };
};

// Default props.
ProjectDialog.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default ProjectDialog;