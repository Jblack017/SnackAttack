import React from "react";
import FoodCard from "./FoodCard";

export default function DeciderBox({ foodCart }) {
  const displayFoods = () => {
    return foodCart.map(food => {
      return <FoodCard food={food} key={food.id} />;
    });
  };

  return <div className='food-container'>{displayFoods()}</div>;
}
