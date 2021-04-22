import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import React, { Component } from "react";

const postURL = "http://localhost:3000/foods/";

export default class PopUpForm extends Component {
  state = {
    snackName: "",
    snackImage: "",
    snackType: "",
    newSnack: {},
  };

  handleSubmit = event => {
    event.preventDefault();
    const dataPack = {
      name: this.state.snackName,
      image: this.state.snackImage,
      foodType: this.state.snackType,
    };
    this.props.addNewSnack(dataPack);
    fetch(postURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataPack),
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Popup
        trigger={<button>Submit Your Munchies</button>}
        position='left top'
      >
        <div>
          <form onSubmit={this.handleSubmit}>
            <label for='snackName'>Name:</label>
            <br></br>
            <input
              value={this.state.snackName}
              onChange={this.handleChange}
              type='text'
              id='snackName'
              name='snackName'
            ></input>
            <br></br>
            <label for='snackImage'>Snack Image:</label>
            <input
              value={this.state.snackImage}
              onChange={this.handleChange}
              type='url'
              id='snackImage'
              name='snackImage'
            ></input>
            <br></br>
            <label for='snackType'>Snack Type:</label>
            <input
              value={this.state.snackType}
              onChange={this.handleChange}
              type='text'
              id='snackType'
              name='snackType'
            ></input>
            <br></br>
            <input type='submit' value='Submit' />
          </form>
        </div>
      </Popup>
    );
  }
}
