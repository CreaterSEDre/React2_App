import { memo, ReactNode, VFC } from "react";
import { Header } from "../organism/leyout/Header";

type Props = {
  children: ReactNode; //ReactNode → タグで囲った要素
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
