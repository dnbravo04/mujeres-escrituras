import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home";
import { ErrorPage } from "./components/ErrorPage";
import { Footer } from "./components/Footer";
import Details from "./components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/details/:characterName",
    element: <Details />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}
