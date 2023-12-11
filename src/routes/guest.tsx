import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

const LoginPage = lazy(() => import("../page/login"));
const GoogleLoginPage = lazy(() => import("../page/_o/google"));

const guestRoutes = [
  {
    element: (
      <Suspense>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/_o/google",
        element: <GoogleLoginPage />,
      },
    ],
  },
];

export default guestRoutes;
