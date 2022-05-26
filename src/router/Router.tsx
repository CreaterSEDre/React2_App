import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { Layout } from "./Layout";
import { NotFound } from "./NotFound";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="UserManagement" element={<UserManagement />} />
        <Route path="Setting" element={<Setting />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/home" render={(match:{url :any}) => (
        <Routes>
          {HomeRoutes.map((route) => (
            <Route key={route.path} path={`${URL}${route.path}`} element={route.children}>
          ))}
        </Routes>
      )} */}
    </Routes>
  );
});
