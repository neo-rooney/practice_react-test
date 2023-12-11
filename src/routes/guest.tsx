import { lazy } from "react";

const LoginPage = lazy(() => import("../page/login"));

const guestRoutes = [
  {
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
];

export default guestRoutes;
