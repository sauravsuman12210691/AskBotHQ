import React, { useState } from 'react'
import HomePage from './Component/HomePage';
import AboutUs from './Component/AboutUs';
import Navbar from './Component/Navbar';
import LogIn from './Component/LogIn';
import SignUp from './Component/SignUp';
import Contact from './Component/Contact'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const navbarRouter = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar /> <HomePage />
      </>
    },
    {
      path: "/about",
      element: <><Navbar /><AboutUs /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /></>
    },
    {
      path: '/login',
      element: <LogIn />
    },
    {
      path: '/signup',
      element: <SignUp />
    }
  ])
  return (
    <>
      <RouterProvider router={navbarRouter} />
    </>
  );
}

export default App
