import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Owner from "./pages/Owner";
import User from "./pages/User";
import Admin from "./pages/Admin";
import GetUsers from "./components/GetUsers";
import DeleteUser from "./components/DeleteUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">404 - Page Not Found 🧙‍♂️</h1>
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "owner", element: <Owner /> },
      { path: "user", element: <User /> },
      { path: "admin", element: <Admin /> },
      { path: "getUsers", element: <GetUsers /> },
      { path: "deleteUsers", element: <DeleteUser /> },

    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
