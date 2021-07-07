//THESE ARE NOTES ONLY FOR MY OWN CLARIFICATION AND LUNDERSTANDING- NO ACTIVE CODE

//*********SETTING UP THE CLASS COMPONENT */

// class component by extending React.Component (class WhateverComponent extends React.Component {}).
// Constructor function to set up state.
// using extends, needs super(); to access the "this".
// then render to the DOM using life-cycle method "render".


// import React from 'react';

// class App extends React.Component {
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state

// constructor() { 
//   //constructor function sets up state; 
//   //setState, lifecycle(?)

//   super(); 
//   //keyword that calls the parent constructor
//   //only if the component has a constructor
//   //kind of "unlocks" the door to the use of the "this" keyword

//     this.state = { 
//     //"this" is  identified keyword
//     //points to the owner of the function (in this case, super())?
//     //replaces hooks const [str, setStr] = useState('Hello')

//       array: [1, 2, 3, 4] 
//       //console.logs 1234 no commas or white space
//       //state property (array) and it's array of integers 
//       //state is a class property? Built in state property

//       // task: 'Bake Cookies',
//       // id: 1528817084358,
//       // completed: false
//     }
// }

//   render() { //render function; 
//     return ( //returns jsx from the function; 
//       <div>
//         <h2>{this.state.array}</h2>
//       </div>
//     );
//   }
// }

// export default App;