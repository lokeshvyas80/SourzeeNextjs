import React from 'react';
import '@/styles/globals.css';
import PropTypes from "prop-types";

function App({ Component, pageProps }) {
  const Layout = Component?.Layout ? Component?.Layout : React?.Fragment;
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    )
}
App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired
};

export default App;