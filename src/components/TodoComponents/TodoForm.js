// <TodoForm /> 
// will hold your input field and your Add Todo and Clear Completed buttons.
// Your input field should take in user input, and allow a user to press 
// Enter or click on the Submit Button to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render and show the added todo.

// Add the functionality to toggle your todo's completed flag from false to true
// Once a todo is completed, be sure to demonstrate to the user that the todo is completed by adding a line-through style property if the completed flag is true.

// Add the ability to remove any todos that you have completed. .filter will be your best friend here. When a user clicks on the Clear Completed button call your handler function that will filter out any todos that have the completed flag toggled to true.


import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
           item: "" 
        };
    }

    render() {
        return (
            <form>
                <input 
                    type="text"
                    //value (this.item) 
                    name="item"
                    //onchange (this.handlechange)
                />
                <button>Yo Imma button</button>
            </form>
        );
    }
}

export default TodoForm;