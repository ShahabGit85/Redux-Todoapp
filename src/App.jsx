import './App.css'
import TodoForm from './components/todoform'
import TodoList from './components/todolist'

function App() {

  return (
<>
  <h1 className='text-center text-primary bold'>Todo app using react-Redux</h1>
  <div>
    <TodoForm/>
    <TodoList/>
  </div>
</>
  )
}

export default App
