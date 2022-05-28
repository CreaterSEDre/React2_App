/*eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";

import { User } from "../types/api/User";
import { useMassage } from "./UseMassage";

export const UseAllUsers = () => {
  const { showMassage } = useMassage();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => {
        showMassage({
          title: "ユーザー取得に失敗しました。",
          status: "warning"
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); //←UseCallBack内に動的に変化する変数があれば設定。なくてもeslintが鳴く。
  return { getUsers, loading, users };
};
