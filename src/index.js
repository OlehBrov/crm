import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./index.css";
import { SharedLayout } from "./components/sidebar";
import { DataSection } from "./components/dataSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,

    children: [
      {
        path: "dataSection",
        element: <DataSection />,
      },
    ],
  },
  {
  basename: "/crm",
}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter router={router}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
