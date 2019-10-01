// <TodoList /> 
// receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from "react";


const TodoList = props => {
    return (
    <div className= "todo"> 
    {props.todo.map (item => {
        return (
            <div className= "addMe" key={item.id}>
                <p>{item.task}</p>
            </div>
        );
    })}
    </div>
    );
};
export default TodoList;