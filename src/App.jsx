import React, { useReducer, useState } from 'react'
import './App.css'

const ACTIONS={
  increment:"inc",
  decrement:"dec"
}

function reducer(state,action){
// return {count:state.count+1}
switch(action.type){
  // case "inc":
  case ACTIONS.increment :
    return {count:state.count+1};
    // case "dec":
    case ACTIONS.decrement:
      return{count:state.count-1};
      default:return state;
}
}

function App() {
 const[state,dispatch]=useReducer(reducer,{count:1})  //{count:1 } is a intial value  reducer is a function it used to updates the value
const[count,setCount]=useState(0);

function inc(){
  // setCount(count+1);
  // dispatch({type:"inc"});
  dispatch({type:ACTIONS.increment});
}


function dec(){
  // setCount(count-1);
  // dispatch({type:"dec"})
  dispatch({type:ACTIONS.decrement});
}
  return (
    <>
     <div>
      
      <button onClick={inc}>increment</button>
      {/* <h3>{count}</h3> it is used in the usestate */}
      <h2>{state.count}</h2>
      <button onClick={dec}>decrement</button>
      </div> 
    </>
  )
}

export default App
