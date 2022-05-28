import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { Layout } from "./Layout";
import { NotFound } from "./NotFound";
import { HeaderLayout } from "../components/templete/HeaderLayout";
import { LoginUserProvider } from "../components/providers/LoginUserProvider";

export const Router: VFC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Layout />}>
          <Route
            index
            element={
              <HeaderLayout>
                <Home />
              </HeaderLayout>
            }
          />
          <Route
            path="UserManagement"
            element={
              <HeaderLayout>
                <UserManagement />
              </HeaderLayout>
            }
          />
          <Route
            path="Setting"
            element={
              <HeaderLayout>
                <Setting />
              </HeaderLayout>
            }
          />
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
    </LoginUserProvider>
  );
});
