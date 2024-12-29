import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <BrowserRouter basename='CodeBears'>
        <App />
      </BrowserRouter>
    </ParallaxProvider>
  </React.StrictMode>
);


