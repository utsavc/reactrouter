import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Blogs from './components/Blog';
import About from './components/About';


import "./server"
import VansList from './components/VansList';
import VanDetail from './components/VanDetail';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Income from './pages/Income';
import Reviews from './pages/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVansDetail from './pages/Host/HostVansDetail';
import HostVansDetailLayout from './pages/Host/HostVansDetailLayout';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import NotFound from './pages/NotFound/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <Routes>

    <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />
        <Route path="list" element={<VansList />} />
        <Route path="list/:id" element={<VanDetail />} />
        
        <Route path='host' element={<HostLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='income' element={<Income/>}/>
          <Route path='vans' element={<HostVans/>}/>
          
          
          <Route path='vans/:id' element={<HostVansDetail/>}>
            <Route index element={<HostVanInfo/>}/>    
            <Route path='pricing' element={<HostVanPricing/>}/>
            <Route path='photos' element={<HostVanPhotos/>}/>      
          </Route>  


          <Route path='reviews' element={<Reviews/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
    </Route>
  </Routes>
   
  
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
