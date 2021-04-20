import React from "react";
import FoodCard from "./FoodCard";

export default function FoodContainer(props) {
  const displayFoods = () => {
    return props.foods.map(food => {
      return (
        <FoodCard
          addToFoodCart={props.addToFoodCart}
          food={food}
          key={food.id}
        />
      );
    });
  };

  return <div className='food-container'>{displayFoods()}</div>;
}
