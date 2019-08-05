import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  siteLinks: {
    columns: 2,
    columnGap: 0,
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <Box component="footer" bgcolor="primary.main" p={2}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography variant="h6">Siargao</Typography>
        </Grid>
        <Grid item xs>
          <ul className={classes.siteLinks}>
            <li>About Us</li>
            <li>Company</li>
          </ul>
        </Grid>
        <Grid item xs={3}>
          Follow Us
        </Grid>
      </Grid>
    </Box>
  );
}
