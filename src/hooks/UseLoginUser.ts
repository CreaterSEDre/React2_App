import { useContext } from "react";

import {
  LoginUserContext,
  LoginUserContextType
} from "../components/providers/LoginUserProvider";

//コンポーネントからUseLoginUserを使うだけで、Contextを参照出来る
export const UseLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
