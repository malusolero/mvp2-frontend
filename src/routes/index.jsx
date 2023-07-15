import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/Home";
import ManagementPage from "../pages/Management";
import SettingsPage from "../pages/Settings";
import GraphsPage from "../pages/Graphs";

const router = createBrowserRouter([
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "/gestao",
    element: <ManagementPage />,
  },
  {
    path: "/configuracoes",
    element: <SettingsPage />,
  },
  {
    path: "/graficos",
    element: <GraphsPage />,
  },
]);

const AppRouter = ({ children }) => (
  <RouterProvider router={router}>{children}</RouterProvider>
);

export default AppRouter;
