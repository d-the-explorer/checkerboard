import { useState } from 'react';

function Square() {
  const [value,setValue] = useState(null);
  
  function handleClick() {
    console.log('clicked!')
  }
  return (
    <button 
      className="square"
      onClick={handleClick}
      >
        {value}
        </button>
        );
}


export default function Board() {
  return (
    <>
    <div className= "board-row">
      <Square value="1" />
      <Square value="2" />
      <Square value="3" />
      <Square value="4" />
      <Square value="5" />
      <Square value="6" />
      <Square value="7" />
      <Square value="8" />
      </div>
          <div className= "board-row">
      <Square value="9" />
      <Square value="10" />
      <Square value="11" />
      <Square value="12" />
      <Square value="13" />
      <Square value="14" />
      <Square value="15" />
      <Square value="16" />
      </div>
          <div className= "board-row">
      <Square value="17" />
      <Square value="18" />
      <Square value="19" />
      <Square value="20" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      </div>
          <div className= "board-row">
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      </div>
          <div className= "board-row">
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      </div>
          <div className= "board-row">
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      </div>
          <div className= "board-row">
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      </div>
          <div className= "board-row">
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      <Square value="" />
      </div>
    </>
  );
}
