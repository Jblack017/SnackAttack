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
      .then(foods => {
        this.setState({ foods: foods, foodsDropdown: foods });
      });
  }

  foodTypeList = () => {
    const list = this.state.foodsDropdown.map(food => food.foodType);
    let uniqueList = list.filter((c, index) => {
      return list.indexOf(c) === index;
    });
    return uniqueList.sort().map(foodItem => (
      <option value={foodItem} key={foodItem}>
        {foodItem}
      </option>
    ));
  };

  handleClick = () => {
    const fave = this.pickRandom(this.state.foodCart);
    this.setState({
      randomFood: fave,
    });
    this.foodTypeList(this.state.foods);
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
    const filteredFoods = this.state.foods.filter(
      food => food.foodType === foodType
    )
    this.setState({
      filteredFoods
    })
  };

  toggleState = () => this.setState({ toggle: !this.state.toggle });
  render() {
    return (
      <div className='App'>
        <Header
          filterSelections={this.filterSelections}
          randomFood={this.state.randomFood}
          foodTypeList={this.foodTypeList}
          handleClick={this.handleClick}
          toggleState={this.toggleState}
          toggle={this.state.toggle}
          filter={this.state}
        />
        {!this.state.toggle ? (
          <DeciderBox
            foodCart={this.state.foodCart}
            clickAction={this.removeFromFoodCart}
            randomFood={this.state.randomFood}
          />
        ) : (
          <FoodContainer
            foodsDropdown={this.state.foodsDropdown}
            clickAction={this.addToFoodCart}
            foods={this.state.filteredFoods}
            foodCart={this.state.foodCart}
          />
        )}
      </div>
    );
  }
}
