import React from "react";
import FoodCard from "./FoodCard";

export default function DeciderBox({ foodCart, clickAction,randomFood }) {
  const displayFoods = () => {
    return foodCart.map(food => {
      return <FoodCard food={food} key={food.id} clickAction={clickAction} randomFood={randomFood} />;
    });
  };

  return <div className='food-container'>{displayFoods()}</div>;
}
