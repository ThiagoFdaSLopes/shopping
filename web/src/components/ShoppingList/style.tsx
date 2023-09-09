import styled from "styled-components";

export const MenuShoppingList = styled.main`
  width: 72rem;
  height: 620px;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 10px; /* Borda arredondada do polegar */
  }
  &::-webkit-scrollbar-thumb {
    background-color: aliceblue;
    border-radius: 10px;
  }
`;

export const Item = styled.div`
  width: 200px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.05);
  margin: 10px;
  border-radius: 5px;
`;

export const ItemNameOrPrice = styled.p`
  font-family: Gilroy, sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  color: white;
`;

export const ItemImage = styled.img`
  margin-bottom: 5px;
`;

export const ButtonBuy = styled.button`
  width: 120px;
  height: 45px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.05);
  font-family: Gilroy, sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  color: white;
  margin-top: 10px;
`;
