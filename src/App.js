import React, { Component } from "react";
import FoodContainer from "./components/FoodContainer";
import "./App.css";
import DeciderBox from "./components/DeciderBox";
import Header from "./containers/Header";

const baseUrl = "http://localhost:3000/foods/";
export default class App extends Component {
  state = {
    toggle: true,
    foods: [],
    filteredFoods: [],
    foodsDropdown: [],
    foodCart: [],
    randomFood: {},
    filter: "All",
  };

  componentDidMount() {
    fetch(baseUrl)
      .then(response => response.json())
      .then(foods => this.updateFoodStates(foods));
  }

  

  updateFoodStates = foods => {
    const snackTypeList = foods.map(food => food.foodType);
    console.log(snackTypeList);
    let foodsDropdown = snackTypeList.filter((c, index) => {
      return snackTypeList.indexOf(c) === index;
    });
    console.log(foodsDropdown);
    this.setState({ foods, foodsDropdown });
  };

  handleClick = () => {
    const fave = this.pickRandom(this.state.foodCart);
    this.setState({
      randomFood: fave,
    });
  };

  pickRandom = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  addToFoodCart = foodItem => {
    const inCart = this.state.foodCart.find(food => food.id === foodItem.id);
    if (!inCart) {
      this.setState({ foodCart: [...this.state.foodCart, foodItem] });
    } else {
      this.removeFromFoodCart(foodItem);
    }
  };

  removeFromFoodCart = foodItem => {
    const inCart = this.state.foodCart.filter(food => foodItem !== food);
    this.setState({
      foodCart: inCart,
    });
  };

  filterSelections = foodType => {
    const snackItem = this.state.foods.filter(
      food => food.foodType === foodType
    );
    this.setState({ filteredFoods: snackItem, filter: foodType });
  };

  toggleState = () => this.setState({ toggle: !this.state.toggle });
  render() {
    return (
      <div className='App'>
        <Header
          randomFood={this.state.randomFood}
          foodsDropdown={this.state.foodsDropdown}
          handleClick={this.handleClick}
          toggleState={this.toggleState}
          toggle={this.state.toggle}
          filterSelections={this.filterSelections}
        />
        {!this.state.toggle ? (
          <DeciderBox
            foodCart={this.state.foodCart}
            clickAction={this.removeFromFoodCart}
            randomFood={this.state.randomFood}
          />
        ) : (
          <FoodContainer
            filterSelection={this.state.filter}
            filteredFoods={this.state.filteredFoods}
            clickAction={this.addToFoodCart}
            foods={this.state.foods}
            foodCart={this.state.foodCart}
          />
        )}
      </div>
    );
  }
}
