// <App /> 
// will hold all the data needed for this project. It will also be the container for your Todo Components.
// All of your application data will be stored here on <App />.
// All of your handler functions should live here on <App />.

// *****DO I NEED ROUTER DOM IMPORT??*************

import React, { Component } from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { Box } from "./components/TodoComponents/Styles";

const listData = [
  {
    task: "task1",
    id: 1,
    completed: false,
  },
  {
    task: "task2",
    id: 2,
    completed: false,
  }
];

class App extends Component {
  constructor() { 
    super(); 
    this.state = { 
      name: "Jackie",
      list: listData
    };
    console.log(listData);
  };


  toggleList = id => {
    console.log(id);

    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          return{
            ...item,
            selected: !item.selected
          };
        } else {
          return item
        }
      })
    });
  };

  addList = listName => {
    const newList = {
      name: listName,
      id: Date.now(),
      selected: true
    };
    this.setState({
      list: [...this.state.list, newList]
    });
  };

  clearSelected = () => {
    this.setState({
      list: 
      this.state.list.filter(item => item.selected)
    });
  };

  render() { 
    return ( 
      <Box className="App">
        <div className="Forms">
          <h2>Task List</h2>
            <TodoList 
              list={this.state.list}
              toggleList={this.toggleList}
              clearSelected={this.clearSelected}
              listData={this.state.listData}
            />
        </div>
            <TodoForm 
              addList={this.addList}
            />
      </Box>
    );
  };
}


export default App;