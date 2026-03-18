import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList.jsx";

function App() {
  const [listTitle, setListTitle] = useState("");
  const [listIdCounter, setListIdCounter] = useState(1);
  const [todoLists, setTodoLists] = useState([]);

  const addTodoList = () => {
    const normalizedTitle = listTitle.trim();
    if (normalizedTitle === "") {
      return;
    }

    setTodoLists((previousLists) => [
      ...previousLists,
      { id: listIdCounter, title: normalizedTitle },
    ]);
    setListIdCounter((previousCounter) => previousCounter + 1);
    setListTitle("");
  };

  const handleTitleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodoList();
    }
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Tworzenie wielu list Todo</h1>

      <div className="list-creator">
        <input
          type="text"
          value={listTitle}
          onChange={(event) => setListTitle(event.target.value)}
          onKeyDown={handleTitleKeyDown}
          placeholder="Wpisz naglowek nowej listy"
        />
        <button onClick={addTodoList}>Utworz liste</button>
      </div>

      <div className="todo-lists-grid">
        {todoLists.map((list) => (
          <TodoList key={list.id} title={list.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
