import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import GlobalStyles from './components/layout/GlobalStyles';
import { apolloClient } from './core/apolloClient';
import Routes from './Routes';
import AuthContext, { AuthContextProvider } from './store/auth.context';
import theme from './theme';

const App: React.FC = () => {
  const routing = useRoutes(Routes);

  return (
    <AuthContextProvider>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {routing}
        </ThemeProvider>
      </ApolloProvider>
    </AuthContextProvider>
  );
};


export default App;
