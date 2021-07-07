// <TodoList /> 
// receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


// import React from "react";


// const TodoList = props => {
//     console.log(props);
//     return (
//         <div className= "todo"> 
//             {props.todo.data.map (item => {
//                 return (
//                     <div>
//                         <div
//                             className={`item${props.item.completed ? ' completed' : ''}`}
//                             onClick={() => props.toggleItem(props.item.todo)} 
//                             >
//                             <div className= "addMe" key={item.id} toggleItem={props.toggleItem}>
//                                 <p>{item.task}</p>
//                             </div>
//                         </div> 
//                     </div>
//                 );
//             })}
            
//         </div>
//     );
// };

// export default TodoList;


import React from "react";
import Todo from "./Todo";
// import Icon from "../Icon.png";

const TodoList = props => {
    return (
        <div className= "todoList">
            {props.list.map(item => (
                <Todo
                    key={item.id}
                    item={item}
                    toggleList={props.toggleList}
                    />
            ))}
            <button> <img src={"./Icon.png"} className= "clearButton" onClick={props.clearSelected}/>
                Clear Selected 
            </button>
        </div>
    )
}

export default TodoList;