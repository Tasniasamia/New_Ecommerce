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
import Payment from './Component/Page/Home/Payment/Payment';
import Fail from './Component/Page/Home/Payment/Fail';
import Resister from './Component/Page/Home/Resister/Resister';
import Login from './Component/Page/Home/Login/Login';
import AuthData from './Component/Page/Share/AuthProvider/AuthData';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import ShopCart from './Component/Page/Home/ShopCart/ShopCart';
import ShopCart2 from './Component/Page/Home/ShopCart/ShopCart2';
import Private_route from './Component/Page/Share/PrivateRoute/PrivateRoute';

const queryClient = new QueryClient()
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
   
      },{
        path:"/Payment/Success/:tran_id",
        element:<Payment></Payment>
      },{
        path:"/Payment/Fail/:tran_id",
        element:<Fail></Fail>
      },{
        path:"/Resister",
        element:<Resister></Resister>
      },{
        path:"/Login",
        element:<Login></Login>
      },{
        path:"/shopCart",
        element:<Private_route><ShopCart></ShopCart></Private_route>
      },{
        path:"/ShopCart2",
        element:<Private_route><ShopCart2></ShopCart2></Private_route>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <div className='max-w-full mx-auto'>
        <QueryClientProvider client={queryClient}>
        <AuthData>
    <RouterProvider router={router} />
    </AuthData>

        </QueryClientProvider>
    </div>

);