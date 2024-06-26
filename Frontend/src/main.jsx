// src/main.jsx (or whatever your entry point file is)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Adjust the path if necessary
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import FullTeam from './pages/FullTeam';
import NewsletterForm from './pages/NewsLetter';
import RegisterUser from './pages/RegisterUser.jsx';
import LoginUser from './pages/LoginUser.jsx';
import RegisterAdmin from './pages/RegisterAdmin.jsx';
import LoginAdmin from './pages/LoginAdmin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  }, 
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "Team",
    element: <FullTeam />,
  }, 
  {
    path: "contact",
    element: <ContactUs />
  },
  {
    path: "newsletter",
    element: <NewsletterForm />
  },
  {
    path: "register-user",
    element: <RegisterUser />
  },
  {
    path: "login-user",
    element: <LoginUser />
  },
  {
    path: "register-admin",
    element: <RegisterAdmin />
  },
  {
    path: "login-admin",
    element: <LoginAdmin />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
