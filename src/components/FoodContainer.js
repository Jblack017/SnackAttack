import React from 'react'
import FoodCard from './FoodCard'

export default function FoodContainer(props) {

  const displayFoods = () => {
    return props.foods.map(food => {
      let isFave = props.foodCart.find(cartItem => cartItem === food)
      return <FoodCard 
        food={food}
        key={food.id}
        clickAction={props.clickAction}
        isFave={isFave}
      />
    })
  }

  return (
    <div className = "food-container">
      {displayFoods()}

    </div>
  )
}
