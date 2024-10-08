import './css/todoitem.css'

const TodoItem = (props) => {

function handleDelete () {
    props.onDelete(props.item);
}

    return (
        <li>
            <div className="todo-item">
                <span className="item-name">{ props.item }</span>
                <span className="item-remove" onClick={handleDelete}> x</span>
            </div>
        </li>
    );
}

export default TodoItem;