import React, { Component } from "react";
import FoodContainer from "./components/FoodContainer";
import "./App.css";
import DeciderBox from "./components/DeciderBox";
import Header from "./containers/Header";
import Video from "./video/smoke.mp4";

const baseUrl = "http://localhost:3000/foods/";
export default class App extends Component {
  state = {
    toggle: true,
    newFood: [],
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
    let foodsDropdown = snackTypeList.sort().filter((c, index) => {
      return snackTypeList.indexOf(c) === index;
    });
    this.setState({ foods, foodsDropdown });
  };

  handleClick = () => {
    const fave = this.pickRandom(this.state.foodCart);
    this.setState({
      randomFood: fave,
      foodCart: [fave, ...this.state.foodCart.filter(food => food !== fave)],
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
    const snackItems = this.state.foods.filter(
      food => food.foodType === foodType
    );
    this.setState({ filteredFoods: snackItems, filter: foodType });
  };

  addNewSnack = snack => {
    this.setState({ foods: [snack, ...this.state.foods], foodCart: [snack, ...this.state.foodCart ] });
  };

  toggleState = () => {
    this.setState({ toggle: !this.state.toggle, randomFood: {} });
  };

  render() {
    return (
      <div className='App'>
        <Header
          filterSelections={this.filterSelections}
          randomFood={this.state.randomFood}
          foodsDropdown={this.state.foodsDropdown}
          handleClick={this.handleClick}
          toggleState={this.toggleState}
          toggle={this.state.toggle}
          addNewSnack={this.addNewSnack}
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
        <video
          className='video'
          autoPlay
          loop
          muted
          src={Video}
          type='video/mp4'
        />
        <footer className="footer"><p>©JScoobEntertainmentGlobal, Inc. All rights reserved.<br/>Created by: Jumpin' Josh  & Scuba Steve</p></footer>
      </div>

    );
  }
}
