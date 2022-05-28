/*eslint-disable react-hooks/exhaustive-deps */
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";

import { UserCard } from "../organism/user/UserCard";
import { UseAllUsers } from "../../hooks/UseAllUsers";
import { UserDetailModal } from "../organism/user/UserDetailModal";
import { UseSelectUsers } from "../../hooks/UseSelectUsers";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = UseAllUsers();
  const { onSelectUser, selectedUser } = UseSelectUsers();

  //初期マウント時に一度のみ実行
  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen]
    /*　↑　[]だと、useCallBackの影響で初回のid=nullの状態での呼び出し以降
        更新されないため、更新対象を記載する。
    */
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </>
  );
});
