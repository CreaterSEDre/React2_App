import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { User } from "../types/api/User";
import { useMassage } from "./UseMassage";
import { UseLoginUser } from "../hooks/UseLoginUser";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMassage } = useMassage();
  const { setLoginUser } = UseLoginUser();

  const [loading, setloading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setloading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            //スプレット構文でオブジェクトの中身を全て並べてisAdminを追加する
            setLoginUser({ ...res.data, isAdmin });
            showMassage({ title: "ログインしました。", status: "success" });
            navigate("/home");
          } else {
            showMassage({
              title: "ユーザーがみつかりません。",
              status: "error"
            });
          }
        })
        .catch(() =>
          showMassage({ title: "ログインできません。", status: "warning" })
        )
        .finally(() => setloading(false));
    },
    [navigate, showMassage, setLoginUser]
  );
  return { login, loading };
};
