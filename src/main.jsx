import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ux_projects from "./components/UIUX/Ux_projects.jsx";
// import FullStack_projects from "./components/FullStack/FullStack_projects.jsx";
import FrontEnd_projects from "./components/FrontEnd/FrontEnd_projects.jsx";
import MemoryGame from "./components/FrontEnd/ViewProjects/MemoryGame.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "ux_projects",
    element: <Ux_projects />,
  },

  // {
  //   path: "fullStack_projects",
  //   element: <FullStack_projects />,
  // },
  {
    path: "frontEnd_projects",
    element: <FrontEnd_projects />,
  },
  {
    path: "memoryGame",
    element: <MemoryGame/>
  },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
