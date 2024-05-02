const TodoListItem = (props) =>
{
    const iterator = props.iterator
    return <li key={iterator.id} class = "listItem">
    {
    iterator.completed === true ?
    <>
        <input type="checkbox" onChange={() =>props.completedTodo(iterator.id)} checked />
        <s>{iterator.todo}</s>
    </> :
    <>
        {props.editingFlag === iterator.id ?
        <>
            <input type="checkbox" onChange={() =>props.completedTodo(iterator.id)} />
            <input type="text" defaultValue={iterator.todo} id="editingTodo" />
            <button onClick={() => props.deleteTodo(iterator.id)}>button</button>
            <button onClick={props.saveEditedTodo}>Save</button>
        </> :
        <>
            <input type="checkbox" onChange={() =>props.completedTodo(iterator.id)} />
            {iterator.todo}
            <button onClick={() => props.deleteTodo(iterator.id)}>Delete</button>
            <button onClick={() =>props.editTodo(iterator.id)}>Edit</button>
        </>
        }
    </>
    }
</li>
    // return <div>list item</div>
}
export default TodoListItem