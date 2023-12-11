import { Suspense, lazy } from "react";
import AuthGuard from "./guards/AuthGuard";
import { Outlet } from "react-router-dom";

const HomePage = lazy(() => import("../page/home"));
const AboutPage = lazy(() => import("../page/about"));

const authRoutes = [
  {
    element: (
      <AuthGuard>
        <Suspense>
          <Outlet />
        </Suspense>
      </AuthGuard>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
];

export default authRoutes;
