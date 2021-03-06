import React, { Component } from "react";
import FoodContainer from "./components/FoodContainer";
import "./App.css";
import DeciderBox from "./components/DeciderBox";
import Header from "./containers/Header";

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
    this.updateFoodStates([
      {
        id: 1,
        name: "Flaming Hot Cheetos",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/510oWbalLKL._AC_SY445_.jpg",
        foodType: "Chips",
      },
      {
        id: 2,
        name: "Boulder Jalapeno Cheddar",
        image:
          "https://d2d8wwwkmhfcva.cloudfront.net/400x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_2977771f-a5b1-4a2f-8a35-2fa5cad3950e.png",
        foodType: "Chips",
      },
      {
        id: 3,
        name: "Ruffles Sour Cream and Cheese",
        image:
          "https://target.scene7.com/is/image/Target/GUEST_5f92b995-39d7-4bc7-a7d4-ce366b8e47b9?wid=488&hei=488&fmt=pjpeg",
        foodType: "Chips",
      },
      {
        id: 4,
        name: "Twix",
        image:
          "https://www.candywarehouse.com/item-images/127612-01_twix-candy-bars-36-piece-box.jpg",
        foodType: "Candy",
      },
      {
        id: 5,
        name: "Sour Patch Kids Berries",
        image:
          "https://www.meijer.com/content/dam/meijer/product/0070/46/2000/06/0070462000061_a1c1_0600.png",
        foodType: "Candy",
      },
      {
        id: 6,
        name: "Starburst FaveREDS",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/71fgJF8d3AL._SL1200_.jpg",
        foodType: "Candy",
      },
      {
        id: 7,
        name: "Klondike Oreo",
        image:
          "https://i5.walmartimages.com/asr/338a4dc8-ae9c-43bb-b1bc-acdbb84515d0.e7344be83b2f665f81d49a25013b81ce.jpeg",
        foodType: "Ice Cream",
      },
      {
        id: 8,
        name: "Talenti Caramel Cookie Crunch",
        image:
          "https://www.talentigelato.com/wp-content/uploads/sites/61/2019/02/xCCC-Pint_259px-w.png,qx22157.pagespeed.ic.T2l0C6jEHC.png",
        foodType: "Ice Cream",
      },
      {
        id: 9,
        name: "Blue Ribbon Strawberry Shortcake",
        image:
          "https://www.meadowbrookicecream.com/files/styles/large/public/images/product//king-size-strawberry-shortcake-ice-cream-bar.jpg?itok=9QuppHqG",
        foodType: "Ice Cream",
      },
      {
        id: 10,
        name: "Jolly Time Blasto O Butter",
        image:
          "https://d2d8wwwkmhfcva.cloudfront.net/400x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_3635b768-38da-4d03-ac48-a5d130ec4291.png",
        foodType: "Popcorn",
      },
      {
        id: 11,
        name: "Double Stuffed Oreos",
        image: "https://images.heb.com/is/image/HEBGrocery/001617462",
        foodType: "Cookies",
      },
      {
        id: 12,
        name: "Peanut Butter Half Baked",
        image:
          "https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/peanut-butter-half-baked-detail.png",
        foodType: "Ice Cream",
      },
      {
        id: 13,
        name: "Carrots and Celery",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/71ib-xNV1uL._SL1500_.jpg",
        foodType: "Veggies",
      },
      {
        id: 14,
        name: "Peanut Butter, Jelly, and Doritos Sandwich",
        image: "https://www.amish365.com/wp-content/uploads/2015/07/dorito.jpg",
        foodType: "Sandwich",
      },
      {
        id: 15,
        name: "Dried Mangos",
        image:
          "https://driedfoodie.com/wp-content/uploads/2020/07/dried-mango-benefits.png",
        foodType: "Fruit",
      },
      {
        id: 16,
        name: "Spicy Nacho Doritos",
        image:
          "https://i5.walmartimages.com/asr/b71dda11-a08b-414e-b4e9-2435243f4e3c_1.ce964e8c760426045230eca8bd76f97d.jpeg",
        foodType: "Chips",
      },
      {
        id: 17,
        name: "Wings",
        image:
          "https://c9u8e9q4.rocketcdn.me/wp-content/uploads/2019/07/Buffalo-Wings-in-the-Air-Fryer.png",
        foodType: "Chicken",
      },
      {
        id: 18,
        name: "Beef Jerky",
        image:
          "https://i8.amplience.net/i/traeger/0716_Jalapeno_Jerky_RE_HE_M?w=500&sm=aspect&aspect=5:3&scaleFit=poi&$poi2$",
        foodType: "Jerky",
      },
      {
        id: 19,
        name: "Siracha Nut Thins",
        image:
          "https://cdn.shopify.com/s/files/1/0329/8007/4627/products/MyDad_sCookies_c7ebae4d-1925-4a38-a4ed-75b9eadc0e08.jpg?v=1593616588",
        foodType: "Crackers",
      },
      {
        id: 20,
        name: "Cookie Dough",
        image:
          "https://sugarspunrun.com/wp-content/uploads/2020/09/Edible-Cookie-Dough-Recipe-1-of-1.jpg",
        foodType: "Cookies",
      },
      {
        id: 21,
        name: "Squid Jerky",
        image:
          "http://www.everyview.com/wp-content/uploads/2012/09/squidJerkyReview.jpg",
        foodType: "Jerky",
      },
      {
        id: 22,
        name: "Snyders Honey Mustard Pretzels",
        image: "https://i.ebayimg.com/images/g/gDsAAOSwKYBc5Q2f/s-l640.jpg",
        foodType: "Chips",
      },
      {
        id: 23,
        name: "Pop-Tarts",
        image:
          "https://target.scene7.com/is/image/Target/GUEST_3039b81e-cb06-45ae-a0e4-7184b099988c?wid=488&hei=488&fmt=pjpeg",
        foodType: "Pastry",
      },
      {
        id: 24,
        name: "Swedish Fish",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61aiFMExI8L._SX425_.jpg",
        foodType: "Candy",
      },
      {
        id: 25,
        name: "Dried Pineapple",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/41kODWpIuKL.jpg",
        foodType: "Fruit",
      },
      {
        name: "Black Licorice",
        image:
          "data:image/jpeg;base64,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",
        foodType: "Candy",
        id: 26,
      },
      {
        name: "Smores Cookie",
        image:
          "https://crumbl.video/6f460083-e6b4-4f9c-8d84-72840eec5798_SmoresBrownieFIXED.png",
        foodType: "Cookies",
        id: 27,
      },
      {
        name: "Gummy Bears",
        image:
          "https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/5455_Gummy+Bears+-+1-Ym6Xt-pW-large.jpg",
        foodType: "Candy",
        id: 28,
      },
      {
        name: "Twix Cookie",
        image:
          "https://crumbl.video/71c9e0cb-2a78-42bf-bbd3-8f63d3c24846_ChilledTwixFIXED.png",
        foodType: "Cookies",
        id: 29,
      },
      {
        name: "Cake Batter Cookie",
        image:
          "https://crumbl.video/9fad49bb-0bca-40c8-a11a-27b443267d64_CakeBatter_Aerial_Tech.png",
        foodType: "Cookies",
        id: 30,
      },
      {
        name: "Peanut Butter & Jelly Cookie",
        image:
          "https://crumbl.video/ce0f0e0b-2ae8-400d-baa3-ad250b861948_PeanutButterJelly_Aerial_Tech.png",
        foodType: "Cookies",
        id: 31,
      },
      {
        name: "Cheddar Cheese",
        image:
          "http://cdn.cnn.com/cnnnext/dam/assets/200623110902-cheddar-cubes.jpg",
        foodType: "Cheese",
        id: 32,
      },
      {
        name: "Cinnamon Toast Crunch",
        image:
          "https://imagez.tmz.com/image/21/4by3/2021/03/23/211c66c78c944c33acb90625297add61_md.jpg",
        foodType: "Cereal ",
        id: 33,
      },
      {
        name: "S'mores Poptart",
        image:
          "https://www.familydollar.com/ccstore/v1/images/?source=/file/v7329171227639094989/products/FD1218253.jpg&height=475&width=475",
        foodType: "Pastry",
        id: 34,
      },
      {
        name: "Cadbury Eggs",
        image: "https://i.ebayimg.com/images/g/tTEAAOSw3dReVhCz/s-l600.jpg",
        foodType: "Chocolate",
        id: 35,
      },
    ]);
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
    this.setState({
      foods: [snack, ...this.state.foods],
      foodCart: [snack, ...this.state.foodCart],
    });
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
        <h2 className='title'>Snack Attack</h2>
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
        <footer className='footer'>
          <p>
            ??JScoobEntertainmentGlobal, Inc. All rights reserved.
            <br />
            Created by: Scuba Steve & Jumpin' Josh
          </p>
        </footer>
      </div>
    );
  }
}
