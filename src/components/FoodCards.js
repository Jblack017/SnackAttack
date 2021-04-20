import React from 'react'

export default function FoodCards(props) {
  return (
    <div className = "food-card">
    <div className="foods">
      <h2>{props.food.name}</h2>
      <img src={props.food.image}></img>
      <h3>Food Type: {props.food.foodType}</h3>
    </div>

    </div>
    
  


    
  )
}
