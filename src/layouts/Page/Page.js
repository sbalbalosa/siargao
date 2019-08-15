import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Main from '../Main/Main';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
});

export default function Page({ maxWidth, children }) {
  const classes = useStyles();
  return (
    <Main>
      <Header maxWidth={maxWidth} />
      <Container
        maxWidth={maxWidth}
        classes={{
          root: classes.root,
        }}
      >
        {children}
      </Container>
      <Footer maxWidth={maxWidth} />
    </Main>
  );
}

Page.propTypes = {
  children: PropTypes.node,
  maxWidth: PropTypes.string,
};

Page.defaultProps = {
  children: null,
  maxWidth: 'lg',
};
