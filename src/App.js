import React, { Component } from 'react'
import FoodContainer from './components/FoodContainer'
import './App.css'
const baseUrl = 'http://localhost:3000/foods/'

export default class App extends Component {
  
  state = {
    foods:[],
    foodCart:[],
  }
  
  componentDidMount(){
    fetch(baseUrl)
    .then(response => response.json())
    .then(foods => {
      this.setState ({
        foods
      })
    })
  }

  render() {
    return (
      <div className ="App">
        <FoodContainer
          foods = {this.state.foods}
        />
      </div>
    )
  }
}
