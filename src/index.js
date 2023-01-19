import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MenuContextProvider } from './Context/MenuContext';
import { ThemeContextProvider } from './Context/ThemeContext';
import { BodyContextProvider } from './Context/BodyContext';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <MenuContextProvider>
        <BodyContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </BodyContextProvider>
      </MenuContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals( ))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
