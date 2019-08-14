import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  siteLinks: {
    columns: 2,
    columnGap: 0,
    listStyleType: 'none',
  },
  footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
  },
});

export default function Footer({ maxWidth }) {
  const classes = useStyles();
  return (
    <Box component="footer" bgcolor="primary.main" p={2} classNam={classes.footer}>
      <Container maxWidth={maxWidth}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Typography variant="h6">Siargao</Typography>
          </Grid>
          <Grid item xs>
            <ul className={classes.siteLinks}>
              <li>About Us</li>
              <li>Company</li>
              <li>Blog</li>
              <li>Sitemap</li>
            </ul>
          </Grid>
          <Grid item xs={3}>
            Follow Us
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  maxWidth: PropTypes.string.isRequired,
};
