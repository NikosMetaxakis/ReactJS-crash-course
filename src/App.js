import './App.css';
import Todos from "./components/Todos"
import ConsoleLog from "./components/ConsoleLog"

function App() {
  
  var state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Have breakfast",
        completed: false
      },
      {
        id: 3,
        title: "Follow ReactJS crashcourse",
        completed: false
      }
    ]
  }

  
  return (
    <div className="App">
      <Todos todos={state.todos} />
      
    </div>
  );
}

export default App;
