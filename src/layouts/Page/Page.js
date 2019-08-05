import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const useStyles = makeStyles({
  root: {
    minHeight: 500,
  },
});

export default function Page({ children }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Container
        classes={{
          root: classes.root,
        }}
      >
        {children}
      </Container>
      <Footer />
    </React.Fragment>
  );
}

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: null,
};
