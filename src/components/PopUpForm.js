import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default () => (
  <Popup trigger={<button>Submit Your Munchies</button>} position="left top">
    <div>
      <form>
        <label for="snack-name">Name:</label>
        <br></br>
        <input type="text" id="snack-name" name="snack-name"></input>
        <br></br>
        <label for="snack-image">Snack Image:</label>
        <input type="url" id="snack-image" name="snack-image"></input>
        <br></br>
        <label for="snack-type">Snack Type:</label>
        <input type="text" id="snack-type" name="snack-type"></input>
        <br></br>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </Popup>
);