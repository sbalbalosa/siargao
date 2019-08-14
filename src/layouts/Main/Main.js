import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Main({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      {children}
    </React.Fragment>
  );
}

Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: null,
};
