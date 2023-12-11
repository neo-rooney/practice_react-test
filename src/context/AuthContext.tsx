import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext<any>(undefined);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);

  const login = () => {
    window.location.href = "http://localhost:3000/_o/google";
  };

  const signWithOAuth = async () => {
    loadUser();
    window.location.replace("/");
  };

  const loadUser = () => {
    console.log("loadUser");
    setUser(1);
  };

  useEffect(() => {
    loadUser();
  });

  if (!user) {
    return <div>로딩중</div>;
  }

  return (
    <AuthContext.Provider value={{ user, login, signWithOAuth, loadUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthContextProvier");
  }
  return context;
};
