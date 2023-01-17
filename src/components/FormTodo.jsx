import React, { useState } from 'react'

export default function FormTodo() {
  const [list, setList] = useState(
    [
      {
        "id": crypto.randomUUID(),
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "id": crypto.randomUUID(),
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "id": crypto.randomUUID(),
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "id": crypto.randomUUID(),
        "title": "et porro tempora",
        "completed": true
      },
      {
        "id": crypto.randomUUID(),
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      }
    ]
  );
  const [input, setInput] = useState("");

  const addTodo = (todo) => {

    if (todo === "") {
      alert('Add a Todo Title ');
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      title: todo,
      completed: false
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

  const doneit = (id) => {
    const newList = list.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setList(newList);
  };

  

  return (
    <div className='wrapper'>
        <div className="header">
            <h2>My To Do List</h2>
            <input className='newtitle'
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Title..." 
            />
            <span 
              onClick={() => addTodo(input)} 
              className="addBtn"
              > Add
            </span>
        </div>

        <div className="list-todos">
          <ul 
            className='todos'>
            {list.map((todo) => (
              <li 
                key={todo.id} 
                className={`todo ${todo.completed ? "checked" : ""}`}
                onClick={() => doneit(todo.id)}
                >                
                  {todo.title}
                <button className='remv-todo' onClick={() => deleteTodo(todo.id)}>&times;</button>
              </li>
              ))}
          </ul>
        </div>

    </div>
  )
}
