import React from "react";

const CartCheckoutCard = () => {
  return (
    <div className="mt-6 h-full rounded-lg bg-black/20 p-6 shadow-md md:mt-0 md:w-1/3">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-400">Subtotal</p>
        <p className="text-gray-400">₹129.99</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-400">Shipping</p>
        <p className="text-gray-400">₹4.99</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">₹134.98 USD</p>
          <p className="text-sm text-gray-700">Including GST</p>
        </div>
      </div>
      <button className="mt-6 w-full rounded-md bg-emerald-400 py-1.5 text-stone-800 font-medium hover:bg-white hover:text-emerald-700 duration-300">
        CHECK OUT
      </button>
    </div>
  );
};

export default CartCheckoutCard;
