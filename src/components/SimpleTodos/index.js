import {Component} from 'react'
import TodoList from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todos: initialTodosList}

  deleteTodo = id => {
    const {todos} = this.state
    const filterTodos = todos.filter(eachTodo => eachTodo.id !== id)
    this.setState({todos: filterTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="bg-container">
        <div className="innerContainer">
          <h1>Simple Todos</h1>
          <ul>
            {todos.map(eachTodo => (
              <TodoList
                eachTodo={eachTodo}
                key={eachTodo.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
