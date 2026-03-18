import { useState } from "react";
import "./TodoList.css";

export default function TodoList(props) {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addTodo = () => { 
        if (inputValue.trim() !== "") {
            setTodos([...todos,{ text: inputValue }]);
            setInputValue("");
        }

    };
    return (
        <div className="todo-container">
            <h1>{props.title || "Todo List"}</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul className="todo-items">
                {todos.map((todo, index) => (
                    <li key={`${todo.text}-${index}`}>{todo.text}</li>
                ))}
            </ul>
        </div>

    )
}
