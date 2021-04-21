import React from "react";

export default function Header(props) {
  return (
    <div className='header'>
      <p>{!props.toggle ? "Munchie Options " : "Chosen Munchies"}</p>
      <button className='button' onClick={props.toggleState}>
        <span>{props.toggle ? "Munchie Options " : "Chosen Munchies"}</span>
      </button>
    </div>
  );
}
