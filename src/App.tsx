import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { AuthContextProvider } from "./context/AuthContext";
import CommonLayout from "./layout/CommonLayout";

function App() {
  return (
    <AuthContextProvider>
      <CommonLayout>
        <RouterProvider router={router} />
      </CommonLayout>
    </AuthContextProvider>
  );
}

export default App;
