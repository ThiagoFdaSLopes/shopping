import React from "react";
import {
  ButtonBuy,
  Item,
  ItemImage,
  ItemNameOrPrice,
  MenuShoppingList,
} from "./style";
import items from "../../Mocks/items";

const ShoppingList: React.FC = () => {
  return (
    <MenuShoppingList>
      {items.map((element, index) => (
        <Item key={index}>
          <ItemImage src={element.image} />
          <ItemNameOrPrice>{element.name}</ItemNameOrPrice>
          <ItemNameOrPrice>{`Price: ${element.price}$`}</ItemNameOrPrice>
          <ButtonBuy>BUY</ButtonBuy>
        </Item>
      ))}
    </MenuShoppingList>
  );
};

export default ShoppingList;
