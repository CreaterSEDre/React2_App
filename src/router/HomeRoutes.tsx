import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const HomeRoutes = [
  {
    path: "/",
    children: <Home />
  },
  {
    path: "/UserManagement",
    children: <UserManagement />
  },
  {
    path: "/Setting",
    children: <Setting />
  }
];
