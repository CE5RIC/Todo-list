import './App.css';
import Form from'./components/Form';
import TodoList from "./components/TodoList";
import {useState} from "react";


function App() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);


    const filterHandler = () => {
        switch(status){
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }

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
