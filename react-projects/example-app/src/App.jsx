import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Qasim } from "./gallery.Jsx";
import { LikeButton, Thumbnail } from "./video";
 function App() {
  const [state, setState] = useState(0);
  const increment=()=> {
    // setState((state) => state + 1);
   
    setState(state+1);
  }
   const decrement=()=> {
     
     if (state >0) {
        setState(state - 1);
     }
  } 
  return (
    
    <div id="counter">
      <div className="subtract"><button onClick={decrement}>-</button></div>
      <div className="box">{state}</div>
      <div className="add"><button onClick={increment}>+</button></div>
   </div>
    
  );
}

export default App;
