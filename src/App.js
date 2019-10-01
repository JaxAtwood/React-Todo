// <App /> 
// will hold all the data needed for this project. It will also be the container for your Todo Components.
// All of your application data will be stored here on <App />.
// All of your handler functions should live here on <App />.


import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import data from "./components/TodoComponents/Todo";


class App extends React.Component {
  constructor() { 
  super(); 
  this.state = { 
      todo: data
    };
}

  render() { 
    return ( 
      <div className="listContainer">
        <div className="listheader">
        <h2>Task List</h2>
        </div>
        <TodoList 
          todo={this.state.todo}
        />
        <TodoForm />
      </div>
    );
  }
}

export default App;