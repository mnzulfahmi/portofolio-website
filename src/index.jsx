import React from 'react';
import {createRoot} from 'react-dom/client';
// import ProfileApp from './components/ProfileApp';

import {BrowserRouter} from 'react-router-dom';
import './index.css';
// import App from './components/App.jsx';
import ProfileApp from './components/ProfileApp.jsx';
// import App from './pages/App.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ProfileApp />
  </BrowserRouter>,
);
