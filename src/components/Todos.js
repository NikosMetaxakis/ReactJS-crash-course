function Todos(props) {
    return props.todos.map((todo) => (
        <h3>{ todo.title }</h3>
    ))
    
    /* (
      <div>
        <h1>Todos</h1>
      </div>
    ); */
  }
  
  export default Todos;