import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Home from './Components/Pages/Home/Home';
import Blogs from './Components/Pages/Blogs/Blogs';
import Contact from './Components/Pages/Contact/Contact';
import Services from './Components/Pages/Services/Services';
import About from './Components/Pages/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/services",
        element: <Services></Services>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
