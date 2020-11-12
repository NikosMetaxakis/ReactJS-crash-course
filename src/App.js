import './App.css';
import Todos from "./components/Todos"
import ConsoleLog from "./components/ConsoleLog"
import { Component } from 'react';

class App extends Component {
  
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Have breakfast",
        completed: true
      },
      {
        id: 3,
        title: "Follow ReactJS crash course",
        completed: false
      }
    ]
  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
      }) });
  }
  
  render(){
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
        
      </div>
    );
  }
  
}

export default App;
