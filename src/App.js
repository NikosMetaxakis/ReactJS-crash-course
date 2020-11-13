import './App.css';
import Header from "./components/layout/Header"
import Todos from "./components/Todos"
import AddTodo from "./components/AddTodo"
import ConsoleLog from "./components/ConsoleLog"
import { Component } from 'react';
import v4 from "../node_modules/uuid/dist/esm-browser/v4";

class App extends Component {
  
  state = {
    todos: [
      {
        id: v4(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: v4(),
        title: "Have breakfast",
        completed: true
      },
      {
        id: v4(),
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

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(
      todo => todo.id !== id)]
    });
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  
  render(){
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos 
            todos={this.state.todos} 
            markComplete={this.markComplete}
            delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
  
}

export default App;
