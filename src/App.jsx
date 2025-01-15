import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./components/AboutPage";
import WaitlistPage from "./pages/WaitlistPage/WaitlistPage";
import ConfirmationPage from "./pages/WaitlistPage/ConfirmationPage";
import Speaker from "./components/Speaker";
import SuccessPage from "./components/success";
import Policies from "./components/policies";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "/form", element: <WaitlistPage /> },
          { path: "/confirmation/:userId", element: <ConfirmationPage /> },
          { path: "/about", element: <AboutPage /> },
          { path: "/speakers", element: <Speaker /> },
          { path: "/success", element: <SuccessPage /> },
          { path: "/policies", element: <Policies /> },

          // Add catch-all route
          { path: "*", element: <Navigate to="/" replace /> },
        ],
      },
    ],
    {
      // Add basename if deploying to GitHub Pages
      //basename: process.env.PUBLIC_URL
    }
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
