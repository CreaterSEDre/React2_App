import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  OnclickHome: () => void;
  OnclickUserManagement: () => void;
  OnclickSetting: () => void;
};

//修正・・・ハンバーガーメニューでボダン押下時にモーダルが閉じない

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    OnclickHome,
    OnclickUserManagement,
    OnclickSetting
  } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={OnclickHome}>
              TOP
            </Button>
            <Button w="100%" onClick={OnclickUserManagement}>
              ユーザ一覧
            </Button>
            <Button w="100%" onClick={OnclickSetting}>
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
