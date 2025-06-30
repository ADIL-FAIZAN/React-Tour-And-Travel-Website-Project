import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route,RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components/Layout'
import './index.css';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';

const router = createBrowserRouter(
  
createRoutesFromElements(

  <Route path="/" element={<Layout/>}>
  
  <Route path="" element={<Home/>} />
  <Route path="Aboutus" element={<Aboutus/>} />
  <Route path="Services" element={<Services/>} />
  <Route path="ContactUs" element={<ContactUs/>} />
    
  </Route>


)
)





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}   />
  </StrictMode>,
)
