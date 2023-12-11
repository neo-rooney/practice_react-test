import { useAuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuthContext();

  return (
    <div>
      LoginPage
      <button onClick={login}>로그인</button>
    </div>
  );
}
