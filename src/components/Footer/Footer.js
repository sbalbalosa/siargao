import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
  return (
    <Box component="footer" bgcolor="primary.main" p={2}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography variant="h6">Siargao</Typography>
        </Grid>
        <Grid item xs>
          <ul>
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
