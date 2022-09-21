
const Form = ({setText}) => {
    // Getting the value typed by user using the below function
    const textHandler = (e) => {
        console.log(e.target.value);

        // Using SetText as a prop while changing the state
        setText(e.target.value);

    }

    return (
        <form>
            <input onChange={textHandler} type="text" className="todo-input"/>
            <button className="todo-button" type="submit">
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

