import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MenuContextProvider } from './Context/MenuContext';
import { ThemeContextProvider } from './Context/ThemeContext';
import { HomeContextProvider } from './Context/PagesContext/HomeContext';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { BrowserRouter } from 'react-router-dom';
import { BiographyContentProvider } from './Context/PagesContext/BiographyContext';
import { ServiceContextProvider } from './Context/PagesContext/ServiceContext';
import { PortfolioContextProvider } from './Context/PagesContext/PortfolioContext';
import { ContactContextProvider } from './Context/PagesContext/ContactContext';
import { BlogContextProvider } from './Context/PagesContext/BlogContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <MenuContextProvider>
        <HomeContextProvider>
          <BiographyContentProvider>
            <ServiceContextProvider>
              <PortfolioContextProvider>
                <ContactContextProvider>
                  <BlogContextProvider>
                    <BrowserRouter>
                      <App />
                    </BrowserRouter>
                  </BlogContextProvider>
                </ContactContextProvider>
              </PortfolioContextProvider>
            </ServiceContextProvider>
          </BiographyContentProvider>
        </HomeContextProvider>
      </MenuContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals( ))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
