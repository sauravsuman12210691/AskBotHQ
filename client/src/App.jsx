import React, { useState } from 'react'
import HomePage from './Component/HomePage';
import AboutUs from './Component/AboutUs';
import Navbar from './Component/Navbar';
import LogIn from './Component/LogIn';
import SignUp from './Component/SignUp';
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Error404 from './Component/Error404';
import { TeamMember } from './ElementData/AboutData';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [Data, setData] = useState(TeamMember)
  const navbarRouter = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar /> <HomePage />
      </>
    },
    {
      path: "/about",
      element: <>
        <Navbar /><AboutUs item={Data} /><Footer />
      </>
    },
    {
      path: "/contact",
      element: <>
        <Navbar /><Contact /> <Footer />
      </>
    },
    {
      path: '/login',
      element: <LogIn />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '*',
      element: <Error404 />
    }
  ])
  return (
    <>
      <RouterProvider router={navbarRouter} />
    </>
  );
}

export default App
