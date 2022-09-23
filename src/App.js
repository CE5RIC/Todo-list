import './App.css';
import Form from'./components/Form';
import TodoList from "./components/TodoList";
import {useState} from "react";


function App() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");

  return (
    <div className="App">
        <header>
            <h1>Todo List </h1>
        </header>
         <Form setStatus={setStatus} todos={todos} setTodos={setTodos} text={text} setText={setText} />
        <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
