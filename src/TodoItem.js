const TodoItem = (props) => {

function handleDelete () {
    props.wipe(props.item);
}

    return (
        <li>
            <div className="todo-item">
                <span className="item-name">{ props.item }</span>
                <span className="item-delete" onClick={handleDelete}> x</span>
            </div>
        </li>
    );
}

export default TodoItem;