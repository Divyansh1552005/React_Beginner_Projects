import React , { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const copy_right_link = React.createElement(
  'h4',
  {id : 'copyright'},
  "Copyrighted material of Divyansh Sharma"
);


function App() {
  let [counter, set_counter] = useState(10);

  let add_value = ()=>{
      // console.log("Value of counter is", counter);
      set_counter(counter + 1);
      set_counter(counter + 1);
      set_counter(counter + 1);
      set_counter(counter + 1);
      console.log("Value of counter after increment by 1 is", counter + 1);
  }
  let dec_value = ()=>{
    if(counter > 0){
      counter -= 1;
      set_counter(counter);
      console.log("Value of counter after decrement by 1 is", counter);}
    else{
      // set_counter(counter);
      alert("Value of counter can't be decreased below zero!")
    }
  }
  return (
    <>
      <h1>Counter Project to understand React hooks</h1>
      <h2 id='ct'>Counter Value = {counter}</h2>
      <br/>
      <button id='b1' onClick={add_value}>Increment Value</button>
      <span>    OR    </span>
      <button id='b2' onClick={dec_value}>Decrement Value</button>
      {copy_right_link}
      {/* <footer>{counter}</footer> */}
    </>
  )
}

export default App
