import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Layout from "./Layout/Layout";
import 'bootstrap/dist/css/bootstrap.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div>This is Home Page</div>,
      },
      {
        path: "/about",
        element: <div>This is About Page</div>,
      },
      {
        path: "/resume",
        element: <div>This is Resume Page</div>,
      },
      {
        path: "/service",
        element: <div>This is Service Page</div>,
      },
      {
        path: "/login",
        element: <div>This is Login Page</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
