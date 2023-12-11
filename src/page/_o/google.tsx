import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

export default function GoogleLoginPage() {
  const { signWithOAuth } = useAuthContext();
  useEffect(() => {
    signWithOAuth();
  }, []);
  return <div>GoogleLoginPage</div>;
}
