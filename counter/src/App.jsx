import { useState } from 'react';
import './App.css'
// useState
function App() {
  let [counter,setCounter]=useState(15);

const addValue=()=>{
  setCounter(counter+1);
}
const decValue=()=>{
  setCounter(counter-1);
}
  return(
    <>
      <h1>me and react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <br/>
      <button onClick={decValue}>decrease value</button>
      
    </>
  )
}

export default App;