import React, { useEffect, useState } from "react";
import axios from "axios";
// import { data } from "../../json/data";
import { AiOutlineShoppingCart } from "react-icons/ai";

const HomeItems = () => {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [shoppingItemsStatus, setShoppingItemsStatus] = useState("notempty");

  const fetchShoppingData = async () => {
    try {
      const data = await axios.get("http://localhost:8090/getshoppingitems");
      setShoppingItems(data.data.items);

      if (data.data.items.length === 0) {
        setShoppingItemsStatus("empty");
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchShoppingData();
  }, []);

  // const foods = data;
  return (
    <div className="pt-20 pb-10">
      <h1 className="uppercase text-5xl text-white font-extralight text-center pb-20">
        Menu
      </h1>
      <div className="grid grid-cols-1 pl-5 pr-5 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:grid-cols-4">
        {shoppingItemsStatus === "notempty" ? (
          shoppingItems.map((item) => (
            <div
              className="card card-compact max-w-96 bg-base-100 shadow-xl"
              key={item.food_id}
            >
              <figure>
                <img
                  src={item.food_image}
                  alt={item.food_name}
                  className="w-full h-[150px] object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.food_name}</h2>
                <p>{item.food_price}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-md btn-ghost text-2xl">
                    <AiOutlineShoppingCart />{" "}
                    <span className="text-xs pl-2">Add to cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center h-screen w-screen">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-sans text-white">
              No items to show
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeItems;
