import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='m-2'> <App/></div>
  </StrictMode>
);

