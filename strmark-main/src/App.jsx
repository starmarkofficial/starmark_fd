import React from 'react'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Home/Navbar'
import Hero from './Components/Home/Hero'
import Regester from './Components/auth/Regester';
import Login from './Components/auth/Login';
import Body from './Components/Home/body';
import JobPage from './Components/Pages/JobPage';
import ProviderPage from './Components/Pages/ProviderPage';
import UserAuth from './Components/auth/UserAuth';
import Regester2 from './Components/auth/Regester2';
import Hero2 from './Components/Hero2'
import Popup from './Components/Popup'

const router = createBrowserRouter([
  {
    path: "/",
    element:<><Navbar/>
    <Popup/>
    <Hero/>
    
    </> ,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
  {
    path: "/regester",
    element:<><Regester/></>
   } ,
   {
    path: "/regester2",
    element:<><Regester2/></>
   } ,
   {
    path: "/login",
    element:<><Login/></>
   } ,
   {
    path: "/about",
    element:<><Body/></>
   } ,
   {
    path: "/jobs",
    element:<><JobPage/></>
   } ,
   {
    path: "/hire",
    element:<><ProviderPage/></>
   } ,
   {
    path: "/auth",
    element:<><UserAuth/></>
   }
]);

function App() {
  return (
    <main>
      <RouterProvider router={router}>

      </RouterProvider>
      {/* <Navbar/>
      <Hero/>
      <Body/> */}
    <Hero2/>
     
     
    
      
      
      
    </main>
  )
}

export default App
