import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider} from "react-router";
import { router } from './routes/Routes.jsx';
import Authprovider from './Firebase/Authprovider.jsx';
import { Darktheme } from './components/Darktheme/Darkthem.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <Darktheme>
<Authprovider>
<RouterProvider router={router} />
   </Authprovider>
  </Darktheme>

 

   
   
  </StrictMode>,
)
