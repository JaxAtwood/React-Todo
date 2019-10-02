// <Todo /> 
// component file that holds the todo data
// renders this data to the screen


// export default [
//     {
//       task: "task1",
//       id: 1,
//       completed: false
//     },
//     {
//       task: "task2",
//       id: 2,
//       completed: false
//     },
//     {
//       task: "task3",
//       id: 3,
//       completed: false
//     }
//   ];


  import React from "react";
  
  const Todo = props => {
    return (
      <div className= {`item${props.item.selected ? ' selected' : ''}`}
      onClick= {() => props.toggleList(props.item.id)}>
        <p>{props.item.name}</p>
      </div>
    );
  };

  export default Todo;