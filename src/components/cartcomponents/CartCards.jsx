import React from "react";
import { RxCross1 } from "react-icons/rx";
import burger from "../../assets/burger.jpg";

const CartCards = () => {
  return (
    <div className="card w-full bg-neutral/80 shadow-xl">
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn btn-square btn-sm">
            <RxCross1 className="text-xl text-white" />
          </button>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-2">
            <img
              src={burger}
              alt="burger"
              className="object-contain h-44 w-44 rounded-2xl"
            />
          </div>
          <div className="col-span-4">
            <h2 className="text-white text-lg font-semibold">Burger</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCards;
