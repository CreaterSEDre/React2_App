/*eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useNavigate } from "react-router-dom";

import { MenuIconButton } from "../../../components/atoms/button/MenuIconButton";
import { MenuDrawer } from "../../../components/molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  /*useCallbackの[]の中には「本来navigate」が入るが、「navigate」は
    reactのhooksのため中身が変更されることはない。そのため、eslintの設定を
    無効にして、空にしている。(好み)
  */
  const OnclickHome = useCallback(() => navigate("/home"), []);
  const OnclickUserManagement = useCallback(
    () => navigate("/home/UserManagement"),
    []
  );
  const OnclickSetting = useCallback(() => navigate("/home/Setting"), []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={OnclickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザ管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={OnclickUserManagement}>ユーザ一覧</Link>
          </Box>
          <Link onClick={OnclickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        OnclickHome={OnclickHome}
        OnclickUserManagement={OnclickUserManagement}
        OnclickSetting={OnclickSetting}
      />
    </>
  );
});
