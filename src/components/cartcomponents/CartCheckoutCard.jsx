import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";

const CartCheckoutCard = () => {
  const { totalPrice } = useContext(CartContext);

  return (
    <div className="mt-6 h-full rounded-lg bg-black/20 p-6 shadow-md md:mt-0 md:w-1/3">
      <div className="mb-4 flex justify-between">
        <p className="text-gray-400">Subtotal</p>
        <p className="text-gray-400">{totalPrice} ₹</p>
      </div>
      <div className="mt-4 flex justify-between">
        <p className="text-gray-400">Shipping</p>
        <p className="text-gray-400">50 ₹</p>
      </div>
      <hr className="my-7" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total Amount</p>
        <div className="flex-col text-right">
          <p className="mb-1 text-lg font-bold">{totalPrice + 50} ₹</p>
          <p className="text-sm text-gray-700 ml-6">including GST</p>
        </div>
      </div>
      {/* <button className="mt-6 w-full rounded-md bg-emerald-400 py-1.5 font-medium text-stone-800 hover:bg-white hover:text-emerald-700 duration-300">
        Check out
      </button> */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            Congratulations Your Order has been placed!
          </h3>
          <p className="py-4">You will receive your order soon</p>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
      <label
        htmlFor="my-modal-5"
        className="btn btn-md mt-6 w-full rounded-md bg-emerald-400 py-1.5 font-medium text-stone-800 hover:bg-white hover:text-emerald-700 duration-300"
      >
        Check out
      </label>
    </div>
  );
};

export default CartCheckoutCard;
