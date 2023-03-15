import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../../context/CartContext";

const CartCard = () => {
  // const [foodQuantity, setFoodQuantity] = useState(null);
  // const [foodItemsData, setFoodItemsData] = useState(null);
  const [itemDeletedStatus, setItemDeletedStatus] = useState(false);
  const {
    setCartStatus,
    cartStatus,
    setTotalPrice,
    cartData,
    setCartData,
    setCartCount,
    valuesChanged,
  } = useContext(CartContext);

  const id = window.localStorage.getItem("UserId");

  const fetchCartData = async () => {
    try {
      const endpointUrl = `http://localhost:8090/cart/${id}`;
      const data = await axios.get(endpointUrl);
      console.log(data.data.data);
      setCartData(data.data.data);
      setCartStatus("notempty");
      setCartCount(data.data.data.length);
      console.log(cartStatus);
      setItemDeletedStatus(false);
      if (data.data.data.length === 0) {
        setCartStatus("empty");
        console.log(cartStatus);
      }
    } catch (err) {
      alert(err);
    }
  };

  const calculateTotal = async (items) => {
    let total = 0;
    console.log("items", items);
    for (let i = 0; i < items.length; i++) {
      total += items[i].food_price * items[i].food_quantity;
    }
    console.log(total);
    setTotalPrice(total);
    return total;
  };

  const handleQuantityChange = async (index, delta) => {
    const updatedFoodItems = [...cartData];
    updatedFoodItems[index].food_quantity += delta;
    if (updatedFoodItems[index].food_quantity < 1) {
      alert("item quantity should not be less than 1");
      return;
    }
    setCartData(updatedFoodItems);

    const endpointUrl =
      import.meta.env.VITE_BACKEND_API +
      `/cart/${updatedFoodItems[index].id}/quantity?quantity=${updatedFoodItems[index].food_quantity}`;
    const response = await axios.put(endpointUrl);
    console.log(response);
  };

  const handleDeleteItem = async (id) => {
    console.log(id);
    const endpointUrl = import.meta.env.VITE_BACKEND_API + `/cart/${id}`;
    const response = await axios.delete(endpointUrl);
    console.log(response);
    setItemDeletedStatus(true);
  };

  useEffect(() => {
    fetchCartData();
  }, [itemDeletedStatus, valuesChanged]);

  useEffect(() => {
    calculateTotal(cartData);
  }, [fetchCartData]);

  return (
    <>
      {cartStatus === "notempty" ? (
        cartData.map((item, index) => (
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
                  <span
                    className="cursor-pointer rounded-l bg-black/25 py-1 px-3.5 duration-100 hover:bg-emerald-400 hover:text-blue-50"
                    onClick={() => handleQuantityChange(index, -1)}
                  >
                    -
                  </span>
                  {/* <input
                    className="h-8 w-8 bg-black/25 text-center text-xs outline-none"
                    type="number"
                    value={item.food_quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(index, e.target.value)
                    }
                  /> */}
                  <span className="h-8 w-8 bg-black/25 text-center pt-2 text-xs outline-none">
                    {item.food_quantity}
                  </span>
                  <span
                    className="cursor-pointer rounded-r bg-black/25 py-1 px-3 duration-100 hover:bg-emerald-400 hover:text-blue-50"
                    onClick={() => handleQuantityChange(index, +1)}
                  >
                    +
                  </span>
                </div>
                <div className="absolute right-6 bottom-6">
                  <button
                    className="btn btn-sm btn-ghost hover:text-red-500 mt-1"
                    onClick={() => handleDeleteItem(item.id)}
                  >
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
