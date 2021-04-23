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
    this.setState({
      snackName: "",
      snackImage: "",
      snackType: "",
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Popup
        trigger={
          <button className='trigger-button'>Submit Your Munchies</button>
        }
        position='left top'
        modal={true}
        className='pop-up'
      >
        <div className='form'>
          <form onSubmit={this.handleSubmit} className="add-snack-bar">
            <label htmlFor='snackName'>Name:</label>

            <input
              value={this.state.snackName}
              onChange={this.handleChange}
              type='text'
              id='snackName'
              name='snackName'
              required
            ></input>
            <br></br>
            <label htmlFor='snackImage'>Snack Image:</label>
            <input
              value={this.state.snackImage}
              onChange={this.handleChange}
              type='text'
              id='snackImage'
              name='snackImage'
              required
            ></input>
            <br></br>
            <label htmlFor='snackType'>Snack Type:</label>
            <input
              value={this.state.snackType}
              onChange={this.handleChange}
              type='text'
              id='snackType'
              name='snackType'
              required
            ></input>
            <br></br>
            <input type='submit' value='Submit' />
          </form>
        </div>
      </Popup>
    );
  }
}
