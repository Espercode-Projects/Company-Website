import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import AdminLayout from "../layouts/AdminLayout";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import ServiceDetail from "../pages/ServiceDetail";
import PortfolioDetail from "../pages/PortfolioDetail";
import NotFound from "../pages/NotFound";
import Services from "../pages/Services";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service/:slug",
        element: <ServiceDetail />,
      },
      {
        path: "/portfolio/:name",
        element: <PortfolioDetail />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path : "*",
    element : <NotFound/>
  }
]);

export default routers;
