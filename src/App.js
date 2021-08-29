import { useState } from 'react';
import './App.css';

function App() {
  let [equation,setEquation]=useState("");
  let [answer,setAnswer]=useState("");
  let [count,setCount]=useState(0);
  const onClick=()=>{
    setAnswer(answer=eval(equation));
    if(answer===undefined){}
    else{
      if(equation===answer){}
      else{
        setCount(count=count+1);
        let para=document.createElement("P");
        para.innerHTML=`<div>
          <p id="answer_dom"> <span id="result">${count} --> </span> Result of the expression
          <span id="result">${equation} </span>is
          <span id="result">${answer}</span></p>
        </div>`;
        document.body.appendChild(para);
        setEquation(equation=answer);
      }
    }
  }
  const onChange=()=>{
    let eq=document.getElementById("equation").value;
    setEquation(equation=eq);
  }
  return (
    <div className="App">
      <p className="header">Want to calculate! Here you go</p>
      <form onClick={onClick}>
        <input type="text" placeholder="Enter the expression"
        onChange={onChange} id="equation" value={equation}/>
        <br></br>
        <br></br>
        <button type="button" className="button">Get Result</button>
      </form>
    </div>
  );
}

export default App;
