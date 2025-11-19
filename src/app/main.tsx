import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Auth0Provider } from '@auth0/nextjs-auth0';

//import Nav from './Nav'
//import Router from './Router';
//import { VITE_AUTH0_DOMAIN, VITE_AUTH0_CLIENT_ID } from '../auth0.config.json';

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <div className='container max-w-full'>
    

        <Auth0Provider

          domain={process.env.AUTH0_DOMAIN}
          clientId={process.env.AUTH0_CLIENT_ID} 

          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <h1>Header Test</h1>

        </Auth0Provider>
            
    
      </div>
  </StrictMode>

)
