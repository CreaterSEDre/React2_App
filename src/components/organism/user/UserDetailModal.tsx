import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack
} from "@chakra-ui/react";
import { memo, VFC } from "react";

import { User } from "../../../types/api/User";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, user } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>ニックネーム</FormLabel>
                <Input value={user?.username} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value={user?.name} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>メール</FormLabel>
                <Input value={user?.email} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>電話番号</FormLabel>
                <Input value={user?.phone} isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
