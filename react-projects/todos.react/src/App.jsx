import { Heading } from './components/heading';
import { Todo_container } from './components/Todo-container';
import { Second_heading } from './components/secondHeading';
import { Task_input } from './components/Task-input';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputvalue] = useState("");
  const [todos, setTodos] = useState([]);
  function addTodos() {
    setTodos([...todos, inputValue]);
    setInputvalue("");
  }
  
  function addInputvalue(value) {
    setInputvalue(value);
  }
  return (
    <>
      <Heading />
      <div className="to-do-list">
        <div id="todo-input-container">
          <input
            value={inputValue}  
            type="text"
            placeholder="Type Your Task Here"
            id="task-field"
            onChange={(event) => {
              addInputvalue(event.target.value);
            }}
          />
          <button id="add-button" onClick={() => {
            addTodos();
          }}>+</button>
        </div>
      </div>
      <Second_heading />
      {/*value="hashim",index=0 iteration=1
         value"qasim",index=1 iteration=2
         value "hamza",index=2 iteration=3
      */
      }
      {todos.map((v,i) => 
        <Task_input key={i} text={v} />
      )
        }    </>
  );
}

export default App
