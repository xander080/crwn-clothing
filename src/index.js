import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import App from './App';

import store from './redux/store';

render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
