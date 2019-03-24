import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global';
import { theme } from '../../styles/variables';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles />
      {children}
    </Fragment>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
