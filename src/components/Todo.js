const Todo = ({text, todos, todo, setTodos}) => {

    // function to find an element that matches with whatever the user clicked on, if it matches it gets deleted
    const deleteHandler = () => {
     setTodos(todos.filter((el) => el.id !== todo.id));
    };



    return(
<div className="todo">
    <li className="todo-item">{text}</li>
    <button className="complete-btn">
        
    </button>
    <button onClick={deleteHandler} className="trash-btn">
        
    </button>
</div>
    );
}

export default Todo;