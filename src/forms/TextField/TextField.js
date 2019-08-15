import React from 'react';
import TxtField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function TextField() {
  const classes = useStyles();
  return (
    <TxtField
      id="outlined-name"
      label="Name"
      className={classes.textField}
      margin="normal"
      variant="outlined"
    />
  );
}
