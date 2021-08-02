import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import GlobalStyles from './components/GlobalStyles';
import Routes from './Routes';
import theme from './theme';

const App: React.FC = () => {
  const routing = useRoutes(Routes);

  return (
    // <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    // </ApolloProvider>
  );
};


export default App;
