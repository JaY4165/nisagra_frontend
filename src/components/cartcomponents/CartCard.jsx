import React from "react";
import { data } from "../../json/cart";

const CartCard = () => {
  const foods = data;
  console.log(foods);
  return (
    <>
      {foods.map((item, index) => (
        <div className="rounded-lg w-[100%]">
          <div className="justify-between mb-6 rounded-lg bg-black/20 p-6 shadow-md sm:flex sm:justify-start">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-36 rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between relative">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-xl font-bold text-white/70">{item.name}</h2>
                <p className="mt-6 text-sm font-normal text-white ">
                  {item.price}₹
                </p>
                <div className="flex items-start border-black/25 mt-9">
                  <span className="cursor-pointer rounded-l bg-black/25 py-1 px-3.5 duration-100 hover:bg-emerald-400 hover:text-blue-50">
                    -
                  </span>
                  <input
                    className="h-8 w-8 bg-black/25 text-center text-white text-xs outline-none"
                    type="number"
                    value="2"
                    min="1"
                  />
                  <span className="cursor-pointer rounded-r bg-black/25 py-1 px-3 duration-100 hover:bg-emerald-400 hover:text-blue-50">
                    +
                  </span>
                  <div className="absolute top-28 left-[95%] md:top-2 md:left-[95%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartCard;
