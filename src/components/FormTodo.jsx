import React, { useState } from 'react'

export default function FormTodo() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // add the todo to the list
    setList([...list, newTodo]);

    // clear input box
    setInput("");
  };

  const deleteTodo = (id) => {
    // Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div className='wrapper'>
        <div id="myDIV" class="header">
            <h2>My To Do List</h2>
            <input  type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Title..." 
            />
            <span 
                  onClick={() => addTodo(input)} 
                  class="addBtn"
                >Add
            </span>
        </div>

        <ul>
            {list.map((todo) => (
              <li 
                key={todo.id} 
                className="checked"
                >                
                {todo.todo}
                <button onClick={() => deleteTodo(todo.id)}>&times;</button>
              </li>
            ))}
        </ul>
    </div>
  )
}
