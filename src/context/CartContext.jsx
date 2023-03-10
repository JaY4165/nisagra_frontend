import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartStatus, setCartStatus] = useState("notempty");

  return (
    <CartContext.Provider value={{ cartStatus, setCartStatus }}>
      {children}
    </CartContext.Provider>
  );
};
