import './App.css';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <h1>React-Redux Todos</h1>
      <div className="TodoForm">
        <TodoForm />
      </div>
      <div className="TodoList">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
