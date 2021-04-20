import React from "react";

export default function Header(props) {
  return (
    <div className='header'>
      <button onClick={props.toggleState}>
        {!props.toggle ? "Munchie Options " : "Chosen Munchies"}
      </button>

    </div>
  );
}
