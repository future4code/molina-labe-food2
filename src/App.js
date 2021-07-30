import React from 'react';
import Route from './router/Route'
import { GlobalStyle } from './assets/styles/globalStyles'
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from './constants/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Route/>
    </ThemeProvider>
  );
}

export default App;
