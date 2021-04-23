import React from "react";
import PopUpForm from "../components/PopUpForm";

export default function Header(props) {
  const handleChange = event => {
    props.filterSelections(event.target.value);
  };

  const handleList = () => {
    const listItem = props.foodsDropdown.map(food => {
      return (
        <option key={food} value={food}>
          {food}
        </option>
      );
    });
    return listItem;
  };

  return (
    <div className='header'>
      <p>SnackAttack
        
      </p>
      <button className='button' onClick={props.toggleState}>
        <span>{!props.toggle ? "Munchies Options" : "Chosen Munchies"}</span>
      </button>
      {props.toggle ? <PopUpForm addNewSnack={props.addNewSnack} /> : null}
      {!props.toggle ? (
        <button onClick={props.handleClick} className='button'>
          Randomizer 3000
        </button>
      ) : (
        <form onChange={handleChange} className='filter-snack-bar'>
          <label className='drop-down-label'>Choose a Snack Type:</label>
          <select name='snacks' id='snacks'>
            <option value='All'>All</option>
            {handleList()}
          </select>
        </form>
      )}
    </div>
  );
}
