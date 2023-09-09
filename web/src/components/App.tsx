import React from "react";
import { debugData } from "../utils/debugData";
import MenuLeft from "./MenuLeft";
import { MenuShoppingList } from "./ShoppingList/style";
import MenuRight from "./MenuRight";
import Header from "./Header";
import { Main } from "./style";

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

const App: React.FC = () => {
  return (
    <Main>
      <Header />
      <MenuLeft />
      <MenuShoppingList />
      <MenuRight />
    </Main>
  );
};

export default App;
