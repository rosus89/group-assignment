import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "./NavBar.css";



// IMPORT PAGES HERE
import Home from './pages/Home'
import About from './pages/About'

// DECLARE ROUTES FOR PAGES HERE
// Router documentation here -> https://reactrouter.com/en/main/start/tutorial

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);