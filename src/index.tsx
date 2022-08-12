import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { App } from './components/App/App';

import { UserProvider } from './contexts/UserContext';
import { PopupResponseContext } from './contexts/PopupResponseContext';

import './styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <PopupResponseContext>
          <App />
        </PopupResponseContext>
      </UserProvider>
    </Router>
    <ToastContainer theme={'dark'} progressStyle={{background: '#E02735'}}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
