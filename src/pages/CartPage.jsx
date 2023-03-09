import React, { useContext } from "react";
import CartCard from "../components/cartcomponents/CartCard";
import CartCheckoutCard from "../components/cartcomponents/CartCheckoutCard";
import "../css/CartPage.css";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartStatus } = useContext(CartContext);

  return (
    <section className="h-screen w-screen overflow-x-hidden">
      {cartStatus === "notempty" ? (
        <div className="h-screen pt-20">
          <h1 className="mb-10 text-center text-2xl font-semibold font-sans">
            Cart Items
          </h1>
          <div className="mx-auto max-w-6xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              <CartCard />
            </div>
            <CartCheckoutCard />
          </div>
        </div>
      ) : (
        <div className="flex h-screen w-screen justify-center items-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-sans texy-white">
            Cart is empty
          </h1>
        </div>
      )}
    </section>
  );
};

export default Cart;
