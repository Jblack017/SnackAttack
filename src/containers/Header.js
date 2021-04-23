import React from "react";
import PopUpForm from "../components/PopUpForm";

export default function Header(props) {
  const handleClick = () => {
    props.handleClick();
  };

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
      <PopUpForm addNewSnack={props.addNewSnack} />
      <p>{props.toggle ? "Munchies Options " : "Chosen Munchies"}</p>
      <button className='button' onClick={props.toggleState}>
        <span>{!props.toggle ? "Munchies Options" : "Chosen Munchies"}</span>
      </button>
      {!props.toggle ? (
        <button onClick={handleClick} className='button'>
          Randomizer 3000
        </button>
      ) : (
        <form onChange={handleChange}>
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
