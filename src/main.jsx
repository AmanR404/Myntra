import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { store } from './Setup/Redux/State/store/index.js';

createRoot(document.getElementById('root')).render(
    <Auth0Provider
      domain="dev-sofj66hiz7axir1x.us.auth0.com"
      clientId="Q6Y93cmLwD9Ock7PS5Vw4YADlyxPotiS"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>,
)
