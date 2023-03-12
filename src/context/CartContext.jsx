import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartStatus, setCartStatus] = useState("notempty");
  const [totalPrice, setTotalPrice] = useState(null);
  const [cartData, setCartData] = useState([]);
  const [cartCount, setCartCount] = useState(null);
  const [valuesChanged, setValuesChanged] = useState(false);

  return (
    <CartContext.Provider
      value={{
        cartStatus,
        setCartStatus,
        totalPrice,
        setTotalPrice,
        cartData,
        setCartData,
        cartCount,
        setCartCount,
        valuesChanged,
        setValuesChanged,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
