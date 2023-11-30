import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Blogs from "./components/Blog";
import About from "./components/About";

import "./server";
import VansList, { loader as vanListLoader } from "./components/VansList";
import VanDetail,{loader as vanListDetailLoader} from "./components/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Reviews from "./pages/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans, { loader as getHostVansLoader } from "./pages/Host/HostVans";
import HostVansDetail,{loader as hostVansDetailLoader} from "./pages/Host/HostVansDetail";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./pages/NotFound/NotFound";
import ErrorDisplay from "./Error/ErrorDisplay";
import Login, {loader as loginLoader, action as loginAction} from "./pages/Login";
import { requireAuth } from "./utils/utils";

//This is for data api above 6 and preferred
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route index element={<Home />}   l/>
      <Route path="blogs" element={<Blogs />}  />
      <Route path="/login" element={<Login />} loader={loginLoader} action={loginAction} />
      <Route path="about" element={<About />} />


      <Route
        path="list"
        element={<VansList />}
        errorElement={<ErrorDisplay />}
        loader={vanListLoader}
      />
      <Route path="list/:id" loader={vanListDetailLoader} element={<VanDetail />} />

      <Route path="host" element={<HostLayout />} >
        <Route
          index
          loader={async ({request}) =>  await requireAuth(request)}
          element={<Dashboard />}
        />

        <Route
          path="income"          
          element={<Income />}
          loader={async ({request}) =>  await requireAuth(request)}
        />

        

        <Route
          path="vans"
          element={<HostVans />}
          loader={getHostVansLoader}
        />

        <Route
          path="vans/:id"
          element={<HostVansDetail />}
          loader={hostVansDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({request}) =>  await requireAuth()}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({request}) =>  await requireAuth()}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({request}) =>  await requireAuth()}
          />
        </Route>

        <Route path="reviews" element={<Reviews />}  loader={async ({request}) =>  await requireAuth()}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />

    {/*This is not supported by data api 6
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
   
  
  </BrowserRouter> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
