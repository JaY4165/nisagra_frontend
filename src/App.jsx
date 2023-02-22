import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          index: true,
          element: <HomePage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
      ],
    },
    {
      path: "/register",
      element: <RegistrationPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
