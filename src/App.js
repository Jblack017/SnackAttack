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
    foodCart: [],
  };
  componentDidMount() {
    fetch(baseUrl)
      .then(response => response.json())
      .then(foods => {
        this.setState({
          foods,
        });
      });
  }
  
  // addFaveIcon = foodItem => {
  //   const inCart = this.state.foodCart.find(food => food.id === foodItem.id);
  //   if (!inCart){
  //     console.log()
  //   }
  // }

  addToFoodCart = foodItem => {
    const inCart = this.state.foodCart.find(food => food.id === foodItem.id);
    if (!inCart) {
      this.setState({ foodCart: [...this.state.foodCart, foodItem] });
    }
  }
  
  toggleState = () => this.setState({ toggle: !this.state.toggle });
  render() {
    return (
      <div className='App'>
        <Header toggleState={this.toggleState} toggle={this.state.toggle} />
        {this.state.toggle ? "Munchie Options" : "Chosen Munchies"}
        {!this.state.toggle ? (
          <DeciderBox foodCart={this.state.foodCart} />
        ) : (
          <FoodContainer
            addToFoodCart={ this.addToFoodCart }
            foods={ this.state.foods }
            foodCart={ this.state.foodCart }
            // addFaveIcon={this.addFaveIcon}
          />
        )}
      </div>
    );
  }
}