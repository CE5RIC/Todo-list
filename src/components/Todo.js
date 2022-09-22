const Todo = (text) => {
    return(
<div className="todo">
    <li className="todo-item">{text}</li>
    <button className="complete-btn">

    </button>
    <button className="trash-btn">

    </button>
</div>
    );
}

export default Todo;