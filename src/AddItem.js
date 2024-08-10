import { useRef } from "react";

const AddItem = (props) => {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        props.onAdd(inputRef.current.value);
        e.preventDefault();
        
    }
    return (
        <form action="" id="add-todo" onSubmit={handleSubmit}>
            <input type="text" ref={ inputRef } required />
            <input type="submit" value="Add to list" />
        </form>
      );
}
 
export default AddItem;