import React from "react";
import { data } from "../../json/data";

const HomeItems = () => {
  const foods = data;
  return (
    <div className="pt-32 pb-10">
      <div className="grid grid-cols-1 pl-5 pr-5 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:grid-cols-4">
        {foods.map((item, index) => (
          <div
            className="card card-compact max-w-96 bg-base-100 shadow-xl"
            key={index}
          >
            <figure>
              <img
                src={item.image}
                alt="Food"
                className="w-full h-[150px] object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-success bg-opacity-80">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeItems;
