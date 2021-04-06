import React from 'react';
import PropTypes from 'prop-types';
import { config as faConfig } from '@fortawesome/fontawesome-svg-core';
import signature from '../helpers/signature';
import 'tailwindcss/tailwind.css';
import 'animate.css/animate.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

faConfig.autoAddCss = false;

const App = function App({ Component, pageProps }) {
  React.useEffect(signature, [])

  return (
    <Component {...pageProps} />
  );
};

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object,
};

export default App;
