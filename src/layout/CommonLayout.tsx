import { ReactNode } from "react";
import { useAuthContext } from "../context/AuthContext";

export default function CommonLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
