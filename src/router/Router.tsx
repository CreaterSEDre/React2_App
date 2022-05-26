import { memo, VFC } from "react";
import { match } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" render={(match:{url :any}) => (
        <Routes>
          {HomeRoutes.map((route) => (
            <Route key={route.path} path={`${URL}${route.path}`} element={route.children}>
          ))}
        </Routes>
      )}
    </Routes>
  );
});
