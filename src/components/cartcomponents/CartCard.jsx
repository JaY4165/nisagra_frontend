import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../../context/CartContext";

const CartCard = () => {
  const { setCartStatus, cartStatus } = useContext(CartContext);

  const [food, setFood] = useState([]);
  // const [foodQuantity, setFoodQuantity] = 1;
  // const [cartStatus, setCartStatus] = useState("empty");
  const [totalPrice, setTotalPrice] = useState(null);

  const id = window.localStorage.getItem("UserId");
  // const id = 12;

  const calculateTotal = async (items) => {
    let total = 0;
    console.log("items", items);
    for (let i = 0; i < items.length; i++) {
      total += items[i].food_price * items[i].food_quantity;
    }
    console.log(total);
    return total;
  };

  const fetchCartData = async () => {
    try {
      const data = await axios.get(`http://localhost:8090/cart/${id}`);
      console.log(data.data.data);
      setFood(data.data.data);
      setCartStatus("notempty");
      console.log(cartStatus);

      if (data.data.data.length === 0) {
        setCartStatus("empty");
        console.log(cartStatus);
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  useEffect(() => {
    calculateTotal(food);
  }, [fetchCartData]);

  return (
    <>
      {cartStatus === "notempty" ? (
        food.map((item) => (
          <div
            className="justify-between mb-6 rounded-lg bg-black/20 p-6 shadow-md sm:flex sm:justify-start relative"
            key={item.id}
          >
            <img
              src={item.food_image}
              alt={item.food_name}
              className="w-full rounded-lg sm:w-40 h-[150px] object-cover"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-xl font-bold text-gray-400">
                  {item.food_name}
                </h2>
                <p className="mt-4 text-md text-gray-300">
                  {item.food_price} ₹
                </p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center">
                  <span className="cursor-pointer rounded-l bg-black/25 py-1 px-3.5 duration-100 hover:bg-emerald-400 hover:text-blue-50">
                    -
                  </span>
                  <input
                    className="h-8 w-8 bg-black/25 text-center text-xs outline-none"
                    type="number"
                    value={item.food_quantity}
                    min="1"
                    onChange={(e) => setFoodQuantity(e.target.value)}
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
        ))
      ) : (
        <div className="flex h-screen w-screen justify-center items-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-sans text-white">
            Cart is empty
          </h1>
        </div>
      )}
    </>
  );
};

export default CartCard;
