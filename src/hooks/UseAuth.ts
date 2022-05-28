import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { User } from "../types/api/User";
import { useMassage } from "./UseMassage";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMassage } = useMassage();

  const [loading, setloading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setloading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
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
    [navigate, showMassage]
  );
  return { login, loading };
};
