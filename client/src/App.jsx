import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Component Importing
import HomePage from './Component/HomePage';
import Landing from './Component/Landing';
import AboutUs from './Component/AboutUs';
import LogIn from './Component/LogIn';
import SignUp from './Component/SignUp';
import Contact from './Component/Contact'
import Error404 from './Component/Error404';
//Data Importing
import { TeamMember } from './ElementData/AboutData';

function App() {
  const [Data, setData] = useState(TeamMember)
  const navbarRouter = createBrowserRouter([
    {
      path: '/',
      element: <>
        <Landing />
      </>
    },
    {
      path: "/home",
      element: <>
        <HomePage />
      </>
    },
    {
      path: "/about",
      element: <>
        <AboutUs item={Data} />
      </>
    },
    {
      path: "/contact",
      element: <>
        <Contact />
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
