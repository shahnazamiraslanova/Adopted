import Root from "../pages/client/Root.jsx";
import Home from "../pages/client/Home.jsx";
import Contact from "../pages/client/Contact.jsx";
import AdminRoot from "../pages/admin/AdminRoot.jsx";
import Dashboard from "../pages/admin/Dashboard.jsx";
import Products from "../pages/admin/Products.jsx";
import Detail  from "../pages/client/Detail.jsx";

const ROUTES = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "detail/:id",
        element: <Detail />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "admin/products",
        element: <Products />,
      },
    ],
  },
];

export default ROUTES;
