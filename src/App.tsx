import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  console.log("App");
  return <RouterProvider router={router} />;
}

export default App;
