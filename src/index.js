import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import './styles/index.css';
import bright from './themes/bright';

ReactDOM.render(
  <ThemeProvider theme={bright}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
