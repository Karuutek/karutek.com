// Deps scoped imports.
import React, { useState } from 'react';
import { makeStyles, Box, Typography, TextField, Button } from '@material-ui/core';
import { useLittera } from '@assembless/react-littera';
import cx from 'classnames';
import { useForm } from "react-hook-form";
import * as emailjs from 'emailjs-com'

// Project scoped imports.

// Component scoped imports.
import styles from './styles';
import translations from './trans';
import { Alert } from '@material-ui/lab';

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

/**
 * Contact component.
 * @description This is a component representing the Contact section.
 * @version 1.0.0
 * @author Assembless <support@assembless.tech>
 */
const Contact = ({ className, style }: ContactProps): JSX.Element => {
  const { register, handleSubmit, reset } = useForm();
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState(false);
  const translated = useLittera(translations);
  const classes = useStyles();

  const onSubmit = async (data: { name: string, email: string, message: string }) => {
    setSuccess(false);
    setErrors("");
    const { name, email, message } = data;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'karuutek@gmail.com',
      message_html: message,
    }

    try {
      await emailjs.send(
        'service_w7xz1vi',
        'template_ar8ek7k',
        templateParams,
        'user_nOc3rJwVzPlX0x0bjMXZU'
      )

      reset();
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setErrors(err.text);
    }

  };

  return (
    <Box className={cx(classes.root, className)} style={style}>
      <Box width="100%">
        <Typography color="primary" variant="h2" className={classes.title}>
          {translated.title}
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Box flexWrap="wrap" display="flex" justifyContent="space-between" width="100%">
            <Box width="60%">
              <TextField type="text" variant="outlined" color="primary" fullWidth label="Name" {...register("name")} required />
              <br />
              <br />
              <TextField type="email" variant="outlined" color="primary" fullWidth label="E-Mail" {...register("email")} required />
              <br />
              <br />
              <TextField type="text" variant="outlined" color="primary" fullWidth label="Message" inputProps={{ style: { minHeight: 140 } }} multiline {...register("message")} required />
            </Box>

            <Box style={{ alignSelf: "flex-end", paddingLeft: "10%", fontWeight: "bold" }}>
              <Typography color="primary" align="right">Karolina Falkowska</Typography>
              <Typography color="primary" align="right">tel. 739 902 153</Typography>
              <Typography color="primary" align="right">karuutek@gmail.com</Typography>
            </Box>
          </Box>

          <Box width="60%">
            {errors && <>
              <br /><br />
              <Alert severity="error" >{errors}</Alert></>}

            {success && <>
              <br /><br />
              <Alert severity="success" >Thanks for getting in touch with me. I will answer as soon as I can.</Alert></>}
          </Box>

          <br />
          <br />
          <Button variant="contained" color="primary" size="large" type="submit">{translated.submit}</Button>
        </form>


      </Box>
    </Box>
  );
};

// Props the component accepts.
type ContactProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Default props.
Contact.defaultProps = {
  className: ``,
  style: {},
};

// Time to export! 🚚
export default Contact;