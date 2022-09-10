import './index.css'

const TodoList = props => {
  const {eachTodo, deleteTodo} = props
  const {title, id} = eachTodo

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-item">
      <p className="title-style">{title}</p>
      <button className="btnstyle" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoList
