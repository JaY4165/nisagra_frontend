import React from "react";
import { data } from "../../json/cart";

const foods = data;

const CartCard = () => {
  return (
    <>
      {foods.map((item, index) => (
        <div
          className="justify-between mb-6 rounded-lg bg-black/20 p-6 shadow-md sm:flex sm:justify-start relative"
          key={index}
        >
          {console.log(index)}
          <img
            src={item.image}
            alt={item.name}
            className="w-full rounded-lg sm:w-40 h-[150px] object-cover"
          />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-xl font-bold text-gray-400">{item.name}</h2>
              <p className="mt-4 text-md text-gray-300">{item.price} ₹</p>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center">
                <span className="cursor-pointer rounded-l bg-black/25 py-1 px-3.5 duration-100 hover:bg-emerald-400 hover:text-blue-50">
                  -
                </span>
                <input
                  className="h-8 w-8 bg-black/25 text-center text-xs outline-none"
                  type="number"
                  // value="2"
                  min="1"
                />
                <span className="cursor-pointer rounded-r bg-black/25 py-1 px-3 duration-100 hover:bg-emerald-400 hover:text-blue-50">
                  +
                </span>
              </div>
              <div className="absolute right-6 bottom-6">
                <button className="btn btn-sm btn-ghost hover:text-red-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartCard;
