
const Form = ({text, setText, todos, setTodos}) => {
    // Getting the value typed by user using the below function
    const textHandler = (e) => {
        console.log(e.target.value);
        // Using SetText as a prop while changing the state
        setText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault()
       setTodos([
           ...todos, {text: text, completed: false, id: Math.random() * 1000},
       ]);
        // resetting input back to an empty string after using SubmitHandler function
        setText("");
    };

    return (
        <form>
            <input value={text} onChange={textHandler} type="text" className="todo-input"/>
            <button onClick={submitHandler} className="todo-button" type="submit">
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;

