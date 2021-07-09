// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography, Button } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.
import image01 from '../../../../../../assets/XtNqCjT 1.png'
import image02 from '../../../../../../assets/67181558_355547431753327_5941956699895103488_n 1.png'
import image03 from '../../../../../../assets/66599253_640959749745687_3938820567636901888_n 1.png'
import image04 from '../../../../../../assets/Ellipse 7.png'
import image05 from '../../../../../../assets/67709394_338815390360088_2929716889045172224_n 1.png'
import image06 from '../../../../../../assets/IMG_20210520_151353 1.png'
import image07 from "../../../../../../assets/Bez tytułu 1.png";

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * PhysiomedicaProject component.
 * @description This is the content of Physiomedica project.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const PhysiomedicaProject = ({ className, style }: PhysiomedicaProjectProps): JSX.Element => {
  const translated = useLittera(translations);
  const classes = useStyles();

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap" style={{padding: "3.5% 0"}}>
        <img src={image01} style={{maxHeight: 350, width: "auto"}} alt="physiomedica logo" />
        <Typography variant="h6" style={{marginTop: "3rem", flexBasis: "60%"}}>{translated.section01}</Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" flexWrap="wrap" style={{padding: "3.5% 0"}}>
        <Typography variant="h6" style={{marginTop: "6.5rem", flexBasis: "55%"}}>{translated.section02}</Typography>
        <img src={image02} style={{maxWidth: 400, height: "auto"}} alt="physiomedica cards" />
      </Box>

      <Box display="flex" justifyContent="space-between" flexWrap="wrap" style={{padding: "3.5% 0"}}>
        <img src={image03} style={{maxHeight: 500, width: "auto"}} alt="physiomedica flyer" />
        <div style={{flexBasis: "55%"}}>
          <Typography variant="h6">{translated.section03}</Typography>
          <Box position="relative" width="480px" height="480px" borderRadius="480px" border={`7px solid #80CBC4`} marginTop={"66px"}>
            <img src={image04} style={{width: 480, height: "auto", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} alt="physiomedica flyers" />
          </Box>
        </div>
      </Box>

      <Box display="flex" justifyContent="space-between" flexWrap="wrap" style={{padding: "19% 0"}}>
        <div style={{flexBasis: "55%"}}>
          <Typography variant="h6">{translated.section04}</Typography>
          <img src={image05} style={{width: 600, height: "auto", marginTop: "66px"}} alt="physiomedica flyer" />
        </div>
          <Box position="relative" width="400px" height="400px" borderRadius="400px" border={`7px solid #80CBC4`}>
            <img src={image06} style={{width: 400, height: "auto", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} alt="physiomedica flyers" />
          </Box>
        
      </Box>

      <Typography variant="h6" style={{marginBottom: "3rem"}}>{translated.section05}</Typography>

      <Box display="flex" justifyContent="space-between" flexWrap="wrap" style={{padding: "19% 0 3.5% ​0"}}>
        <img src={image07} style={{width: "100%", height: "auto"}} alt="physiomedica page" />
      </Box>

      <Box width="100%" display="flex" justifyContent="center" alignItems="center" height="120px">
      <Button style={{backgroundColor: "#80CBC4"}} href="https://physiomedica.eu/" variant="contained" size="large">{translated.visit}</Button>
      </Box>

    </Box>
  );
};

// Props the component accepts.
type PhysiomedicaProjectProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
PhysiomedicaProject.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default PhysiomedicaProject;
