import { createBrowserRouter } from "react-router-dom";
import authRoutes from "./auth";
import guestRoutes from "./guest";
import { lazy } from "react";
const Page404 = lazy(() => import("../page/page404"));

export const router = createBrowserRouter([
  ...authRoutes,
  ...guestRoutes,
  {
    path: "*",
    element: <Page404 />,
  },
]);
