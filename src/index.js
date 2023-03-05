import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { store } from './store/configureStore';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer bodyClassName={'font-body text-sm'} />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
