import React from 'react'
import FoodCards from './FoodCards'

export default function FoodContainer(props) {

  const displayFoods = () => {
    return props.foods.map(food => {
      return <FoodCards 
        food={food}
        key={food.id}
      />
    })
  }

  return (
    <div className = "food-container">
      {displayFoods()}
    </div>
  )
}
