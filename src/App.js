import './App.css';
import Form from'./components/Form';
import TodoList from "./components/TodoList";
import {useState} from "react";


function App() {
    const [text, setText] = useState("");

  return (
    <div className="App">
        <header>
            <h1>Todo List{text}</h1>
        </header>
         <Form setText={setText} />
        <TodoList/>
    </div>
  );
}

export default App;
