// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.
import image01 from '../../../../../../assets/morflax_things 1.png'
import image02 from '../../../../../../assets/givent_logo.png'
import image03 from '../../../../../../assets/Zrzut ekranu 2021-06-11 041047.png'
import image04 from '../../../../../../assets/Zrzut ekranu 2021-06-11 041339.png'

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * GiventProject component.
 * @description This is the content of Givent project.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const GiventProject = ({ className, style }: GiventProjectProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap" style={{ padding: "3.5% 0" }}>
        <img src={image01} style={{ maxWidth: "40%", height: "auto" }} alt="Givent example" />
        <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" style={{ flexBasis: "55%", marginTop: "4rem" }}>
          <Typography variant="h6">{translated.section01}</Typography>
          <Box position="relative" width="480px" height="480px" marginTop={"66px"}>
            <img src={image02} style={{ width: 480, height: "auto", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} alt="Givent logo" />
          </Box>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" flexWrap="wrap" style={{ padding: "3.5% 0" }}>
        <Typography variant="h6">{translated.section02}</Typography>
      </Box>

      <img src={image03} style={{ width: "100%", height: "auto" }} alt="Givent example" />
      
      <Box display="flex" justifyContent="space-between" flexWrap="wrap" style={{ padding: "3.5% 0" }}>
        <Typography variant="h6">{translated.section02}</Typography>
        <Typography variant="h6">{translated.section03}</Typography>
      </Box>

      <img src={image04} style={{ width: "100%", height: "auto" }} alt="Givent example" />
      {/* <Box display="flex" justifyContent="space-between" flexWrap="wrap" style={{padding: "19% 0"}}>
        <div style={{flexBasis: "55%"}}>
          <Typography variant="h6">{translated.section04}</Typography>
          <img src={image05} style={{width: 600, height: "auto", marginTop: "66px"}} alt="Givent flyer" />
        </div>
          <Box position="relative" width="400px" height="400px" borderRadius="400px" border={`7px solid #80CBC4`}>
            <img src={image06} style={{width: 400, height: "auto", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} alt="Givent flyers" />
          </Box>
        
      </Box> */}

    </Box>
  );
};

// Props the component accepts.
type GiventProjectProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
GiventProject.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default GiventProject;