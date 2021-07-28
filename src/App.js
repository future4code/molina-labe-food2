import React from 'react';
import Route from './router/Route'
import { GlobalStyle } from './assets/styles/globalStyles'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Route/>
    </>
  );
}

export default App;
