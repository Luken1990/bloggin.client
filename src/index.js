import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextProvider } from './context/userContext';
import { BlogsContextProvider } from './context/blogsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BlogsContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </BlogsContextProvider>
  </React.StrictMode>
);
