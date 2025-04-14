import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import LandingPage from "../pages/landing/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  { path: "*", element: <h1>Not Found</h1> },
]);

export default router;
