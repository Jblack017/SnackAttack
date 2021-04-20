import React from "react";

export default function FoodCard(props) {
  const handleClick = () => props.addToFoodCart(props.food);

  return (
    <div className='food-card' onClick={() => handleClick()}>
      <h2>{props.food.name}</h2>
      <img src={props.food.image} alt={props.food.name}></img>
      <h3>Food Type: {props.food.foodType}</h3>
    </div>
  );
}
