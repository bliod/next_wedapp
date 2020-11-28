
import '../styles/globals.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import UserContext from '../contexts/UserContext';
import Cookie from 'js-cookie';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html, body {
            height: 100%;
            margin: 0;
            width: 100%;

        }
`

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [user, updateUser] = useState(null);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    const token = Cookie.get("token");
    if (token) {
      getToken(token);
    }
  }, []);

  const getToken = async (token) => {
    try {
      const response = await fetch(`${process.env.apiUrl}/users/me`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: { Authorization: `Bearer ${token}` }
      });
      const user = await response.json();
      updateUser(user)
    } catch (e) {
      Cookie.remove("token");
      updateUser(null);
    }
  };
  return (
    <UserContext.Provider value={{ isAuthenticated: !!user, user, updateUser }}>
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <GlobalStyle></GlobalStyle>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    </UserContext.Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};