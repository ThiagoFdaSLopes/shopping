import styled from "styled-components";

export const MenuLeftBox = styled.ul`
  width: 350px;
  height: 620px;
  margin-right: 5px;
  overflow-y: auto;

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

export const CardItems = styled.li`
  width: 320px;
  height: 75px;
  background-color: rgba(255, 255, 255, 0.05);
  text-decoration: none;
  list-style-type: none;
  margin-bottom: 10px;

  p {
    font-family: Gilroy, sans-serif;
    font-size: 16px;
    line-height: 5rem;
    letter-spacing: 1px;
    color: white;
    margin-left: 1rem;
  }
`;
