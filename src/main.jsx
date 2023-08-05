import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeLayout from './Component/Layout/HomeLayout/HomeLayout';
import Home from './Component/Page/Home/Home/Home';
import About from './Component/Page/Home/About/About';
import Shop from './Component/Page/Home/Shop/Shop';
import Blog from './Component/Page/Home/Blog/Blog';
import Contact from './Component/Page/Home/Contact/Contact';
import ProductDetails from './Component/Page/Home/ProductDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/About",
        element:<About></About>
      },{
        path:"/Blog",
        element:<Blog></Blog>
      },{
        path:"/contact",
        element:<Contact></Contact>
      },{
        path:"/shop",
        element:<Shop></Shop>
      },{
        path:"/shop/:id",
        element:<ProductDetails></ProductDetails>,
   
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='max-w-full mx-auto'>
    <RouterProvider router={router} /></div>
  </React.StrictMode>
);