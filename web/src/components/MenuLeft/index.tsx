import React from "react";
import { MenuLeftBox, CardItems } from "./style";
import categories from "../../Mocks/categories.json";

const MenuLeft: React.FC = () => {
  return (
    <MenuLeftBox>
      {categories.map((element, index) => (
        <CardItems key={index}>
          <p>{element.name}</p>
        </CardItems>
      ))}
    </MenuLeftBox>
  );
};

export default MenuLeft;
