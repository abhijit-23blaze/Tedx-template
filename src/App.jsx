import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import WaitlistPage from "./pages/WaitlistPage/WaitlistPage";
import ConfirmationPage from "./pages/WaitlistPage/ConfirmationPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/form", element: <WaitlistPage /> },
        { path: "/confirmation/:userId", element: <ConfirmationPage /> },
        { path: "/about", element: <AboutPage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;