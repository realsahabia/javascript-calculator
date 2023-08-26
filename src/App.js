import React, { useState } from 'react';
import Button from './components/Buttons';
import Output from './components/Output';
import './App.css';
import {evaluate} from 'mathjs';

function App() {
    const [content, setContent] = useState('');
    const [result, setResult] = useState('');


  const addToInput = (val) =>{
    setContent((content) => [...content, val + " "])
  }

  const calcResult = () => {
    const allInputs = content.join("");

    setResult(evaluate(allInputs))
  }

  const resetCal = () => {
    setContent("");
    setResult("");
  }


  return (
    <div className="App">
      <div className="cal-wrapper">
        
        <Output content={ content } result={ result} id="display" />

        <div className="row">
          <Button value="AC" id="clear" handleClick={resetCal}/>
          <Button value="DE" id="delete" handleClick={addToInput} />
          <Button value="%" id="percentage" handleClick={addToInput} />
          <Button value="/" id="divide" handleClick={addToInput} />
        </div>

        <div className="row">
          <Button value="7" id="seven" handleClick={addToInput} />
          <Button value="8" id="eight" handleClick={addToInput} />
          <Button value="9" id="nine" handleClick={addToInput} />
          <Button value="*" id="multiply" handleClick={addToInput} />
        </div>

        <div className="row">
          <Button value="4" id="four" handleClick={addToInput} />
          <Button value="5" id="five" handleClick={addToInput} />
          <Button value="6" id="six"  handleClick={addToInput} />
          <Button value="-" id="subtract" handleClick={addToInput} />
        </div>

        <div className="row">
          <Button value="1" id="one"  handleClick={addToInput} />
          <Button value="2" id="two" handleClick={addToInput} />
          <Button value="3" id="three" handleClick={addToInput} />
          <Button value="+" id="add"  handleClick={addToInput} />
        </div>

        <div className="equal">
          <Button value="0" id="zero" handleClick={addToInput} />
          <Button value="." id="decimal" handleClick={addToInput} />
          <Button value="=" id="equals" handleClick={calcResult} />
        </div>
      </div>
    </div>
  );
}

export default App;