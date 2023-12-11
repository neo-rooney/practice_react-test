import { ReactNode, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { user } = useAuthContext();

  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" replace={true} />;
  }
}
