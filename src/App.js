import './App.css';
import Form from'./components/Form';
import TodoList from "./components/TodoList";
import {useState, useEffect} from "react";


function App() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);



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

    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal);
        }
    }

  return (
    <div className="App">
        <header>
            <h1>Todo List </h1>
        </header>
         <Form setStatus={setStatus} todos={todos} setTodos={setTodos} text={text} setText={setText} />
        <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
