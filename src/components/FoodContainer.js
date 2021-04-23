import React from "react";
import FoodCard from "./FoodCard";

export default function FoodContainer(props) {
  const displayFoods = arr => {
    return arr.map(food => {
      let isFave = props.foodCart.find(cartItem => cartItem === food);
      return (
        <FoodCard
          food={food}
          key={food.id}
          clickAction={props.clickAction}
          isFave={isFave}
        />
      );
    });
  };


  return (
    <div className='food-container'>
      {props.filterSelection === "All"
        ? displayFoods(props.foods)
        : displayFoods(props.filteredFoods)}
    </div>
  );
}
