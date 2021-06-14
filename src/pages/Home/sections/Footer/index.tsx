// Deps scoped imports.
import React from 'react';
import { makeStyles, Box, Typography, Container, FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';
import { useLittera, useLitteraMethods } from '@assembless/react-littera';
import cx from 'classnames';

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Footer component.
 * @description The component displaying important info at the bottom of the page.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Footer = ({ className, style }: FooterProps) => {
  const { locale, setLocale } = useLitteraMethods();
  const translated = useLittera(translations);
  const classes = useStyles();

  const changeLocale = (event: React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
  }>) => {
    const l = event.target.value as "pl_PL" | "de_DE" | "en_US";
    setLocale(l);
  }

  return (
    <Container>
      <Box className={cx(classes.root, className)} style={style} display="flex" alignItems="center" justifyContent="space-between">
        <Typography className={classes.title} style={{margin: 0}}>
          {translated.cpr}
        </Typography>

        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label" className={classes.inputLabel}>{translated.language}</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={locale}
            onChange={changeLocale}
            label="Language"
          >
            <MenuItem value={"pl_PL"}>Polski</MenuItem>
            <MenuItem value={"de_DE"}>Deutsch</MenuItem>
            <MenuItem value={"en_US"}>English</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Container>
  );
};

// Props the component accepts.
type FooterProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
Footer.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default Footer;