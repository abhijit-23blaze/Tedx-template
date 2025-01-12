import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage/HomePage";
import WaitlistPage from "./pages/WaitlistPage/WaitlistPage";
import ConfirmationForm from "./components/ConfirmationForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/form", element: <WaitlistPage /> },
        { path: "/confirmation/:userId", element: <ConfirmationForm /> },
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