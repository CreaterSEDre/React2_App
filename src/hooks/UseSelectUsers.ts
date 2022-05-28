import { useCallback, useState } from "react";

import { User } from "../types/api/User";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};
//役割：選択したユーザー情報を特定し、モーダルを表示する。
export const UseSelectUsers = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);

    //find()は返却値が見つからないとundifinedを返す。
    //??は左辺がnull or undifinedの時に右辺を返す。
    //setSelectedUser(targetUser ?? null);

    //typescriptでは[!]はundifinedの可能性を排除できる。
    setSelectedUser(targetUser!);
    onOpen();
  }, []);

  return { onSelectUser, selectedUser };
};
