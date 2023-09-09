import React from "react";
import { debugData } from "../utils/debugData";
import MenuLeft from "./MenuLeft";
import ShoppingList from "./ShoppingList";
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
      <ShoppingList />
      <MenuRight />
    </Main>
  );
};

export default App;
