import { createContext } from "react";

export type CartContextData = {
  itens: number;
};

export type CartContextType = {
  cartContextData: CartContextData;
  setCartContextData: (cartContextData: CartContextData) => void;
};

export const CartContext = createContext<CartContextType>({
  cartContextData: {
    itens: 0,
  },
  setCartContextData: () => null,
});
