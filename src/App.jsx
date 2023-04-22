import { useState } from 'react'
import './App.css'

function App() {
const [result, setResult] = useState('')



function clear(){
  setResult('')
}

function deleteChar(){
  setResult(result.slice(0, -1))
}

function handleClick(e){
  const lastChar = result[result.length - 1];
  const allowedChars = /[0-9+\-*/.]/;

  if (result === "" && /[*/.]/.test(e.target.name)) {
    // Don't allow the user to start with *, /, or .
    return;
  } else if (!allowedChars.test(e.target.name)) {
    // Only allow numbers and valid operators
    return;
  } else if (/[\-+*/.]$/.test(result) && /[\-+*/.]/.test(e.target.name)) {
    // Don't allow consecutive operators or .
    return;
  } else if (lastChar === "." && e.target.name === ".") {
    // Don't allow consecutive .
    return;
  }
setResult(result.concat(e.target.name))
}

function calculate (){
  setResult(eval(result).toString())
}

  return (
    <div className='calculator'>
      <div>
        <input type="text" value={result} readOnly />
      </div>
      <div className="keypad">
        <button className="highlight" onClick={clear} id="clear">
          Clear
        </button>
        <button className="highlight" onClick={deleteChar}> Del </button>
        <button name="/" onClick={handleClick}>
          &divide;
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="*" onClick={handleClick}>
          &times;
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" onClick={handleClick}>
          &ndash;
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="+" onClick={handleClick}>
          +
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button className="highlight" onClick={calculate} id="result">
          =
        </button>
      </div>

  )
    </div>
  )
}

export default App
