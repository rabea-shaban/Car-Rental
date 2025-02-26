// App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import { MainLayout } from "./MainLayout";
import Home from "./components/Home/Home";
import AllVehicles from "./components/API/AllVehicles";
import Details from "./components/API/Details";
import NotFound from "./components/NotFound";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "Home", element: <Home /> },
        { path: "Home/all-vehicles", element: <AllVehicles /> },
        { path: "Home/all-vehicles/:id", element: <Details /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
