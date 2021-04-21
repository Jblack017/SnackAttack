import React from "react";

export default function Header(props) {
  const handleClick = () => {
    props.handleClick();
    setTimeout(console.log(props.randomFood), 2200);
  };

  return (
    <div className='header'>
      <p>{props.toggle ? "Munchies Options " : "Chosen Munchies"}</p>
      <button className='button' onClick={props.toggleState}>
        <span>{!props.toggle ? "Munchies Options " : "Chosen Munchies"}</span>
      </button>
      {!props.toggle ? (
        <button onClick={handleClick} className='button'>
          Randomizer 3000
        </button>
      ) : null}
    </div>
  );
}
