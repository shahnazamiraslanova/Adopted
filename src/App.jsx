import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ROUTES from "./routes/routes.index.jsx";

const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;