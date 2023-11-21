import Landing from "pages/Landing/Landing";
import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";
import Layout from "layout/Layout";

function AppRoutes() {
  const user = null;

  const routes = user ? protectedRoutes : publicRoutes;

  const availableRoutes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{ index: true, element: <Landing /> }, ...routes],
    },
  ]);

  return <>{availableRoutes}</>;
}

export default AppRoutes;
