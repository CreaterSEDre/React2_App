import { extendTheme } from "@chakra-ui/react";

//グローバルなスタイルの充て方

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "glay.400",
        color: "glay.800"
      }
    }
  }
});
export default theme;
