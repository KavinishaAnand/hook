// import React, { useReducer, useState } from 'react'
// import './App.css'

// const ACTIONS={
//   increment:"inc",
//   decrement:"dec"
// }

// function reducer(state,action){
// // return {count:state.count+1}
// switch(action.type){
//   // case "inc":
//   case ACTIONS.increment :
//     return {count:state.count+1};
//     // case "dec":
//     case ACTIONS.decrement:
//       return{count:state.count-1};
//       default:return state;
// }
// }

// function App() {
//  const[state,dispatch]=useReducer(reducer,{count:1})  //{count:1 } is a intial value  reducer is a function it used to updates the value
// const[count,setCount]=useState(0);

// function inc(){
//   // setCount(count+1);
//   // dispatch({type:"inc"});
//   dispatch({type:ACTIONS.increment});
// }


// function dec(){
//   // setCount(count-1);
//   // dispatch({type:"dec"})
//   dispatch({type:ACTIONS.decrement});
// }
//   return (
//     <>
//      <div>
      
//       <button onClick={inc}>increment</button>
//       {/* <h3>{count}</h3> it is used in the usestate */}
//       <h2>{state.count}</h2>
//       <button onClick={dec}>decrement</button>
//       </div> 
//     </>
//   )
// }

// export default App



import './App.css'
import Contact from './components/Contact'
import Home from './components/Home'
import Products from './components/products'
import Tasks from './components/Tasks'
import User from './components/User'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './App.css'
import { BrowserRouter, Routes, Router, Route, Link } from "react-router-dom"

function App() {
  // const Test=GetUser(User);
  return (
    <>
      <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              </Typography>
              <Button color="inherit"><Link to="home" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></Button>
              <Button color="inherit"><Link to="contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</Link></Button>
              <Button color="inherit"><Link to="tasks" style={{ textDecoration: 'none', color: 'white' }}>Tasks</Link></Button>
              <Button color="inherit"><Link to="user" style={{ textDecoration: 'none', color: 'white' }}>User</Link></Button>
              <Button color="inherit"><Link to="products" style={{ textDecoration: 'none', color: 'white' }}>Products</Link></Button></Toolbar>
          </AppBar>
        </Box>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='tasks' element={<Tasks />} />
          <Route path='user' element={<User />} />
          <Route path='products' element={<Products />} />
        </Routes>
      </BrowserRouter>
      {/* <Test/> */}
      {/* <User/> */}
      {/* <Products/> */}
      {/* <Tasks /> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
