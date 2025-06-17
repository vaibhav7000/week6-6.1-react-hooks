import { Header } from "./Components/Header.jsx";
import React, { Fragment, useState } from "react";
import HeaderWithButton from "./Components/HeaderWithButton.jsx";
import TodoInputMemo from "./Components/TodoInput.jsx";
import { AllTodosMemo } from "./Components/AllTodos.jsx";


function App () {
  const [ title, setTitle ] = useState("Name is JS");
  return (
    // the top level parent can be removed using <></> or <React.fragment></React.fragment>, the reason for that is Reconcilation 
    // or import Fragment from React 
    <div style={{display:"flex", gap: 30, flexDirection:"column"}}>
      <HeaderWithButton />
      <Header  title={title}/>
      <Header  title={"Hello JS"}/>
      <Header  title={"Hello JS"}/>

      <Header  title={"Hello JS"}/>
      <Header  title={"Hello JS"}/>

      <Header  title={"Hello JS"}/>

      <HeaderMemo title={"Hellos JSSS"} />

      <button style={{
        margin: 20
      }} onClick={function() {
        setTitle(`My name is ${Math.random()}`);
      }}> Update the title</button>
    </div>
  )
}


export default App;

// Introduction to React was to make dynamic websites + making the dom-manipulation / re-renders less as DOM-manipulation is expensive ( only updating those parts that has changed and if not changed ignores that )


// Re-rendering in React (dom-updation done by React)
// 1. This will happen when the state variable value gets change, => "The parent that has the state-variable will gets re-render" ( called again by React), similarly the Childs that are present inside the Parent will also re-render irrespective of using the state-variable ( this behaviour is default )

// Only the custom maded Components get re-rendered

// We want less components to get re-render, lesser the components re-render / refresh more optimal website it will be

// TO make the optimal React app (less re-renders), maintain the state variable at the lowest level parent / or use React-memo -> This Hook will not upadte the children if the props pass to them does not changed


const HeaderMemo = React.memo(function({title}) {
  return (
    <div>
      {title}
    </div>
  )
})

// React memo lets to skip re-rendering when the props passed to it are unchanged => if the parent has different state variables and different state-variables are passed to different components, => change in the state-variable will cause the Parent to re-render ( call the function again ) + all the Child components that uses that state-variable will be gets changed

// The state-variables should always gets passed from Parent to Child not from Child to Parent



function TodoApp() {
  // This is the parent that will have all todos (state-variable), title and description for the new-todos (that will get added)

  // When creating Dynamic websites using React we should always want less Components to get re-render (as component re-rendering is expensive)

  // Implementing the above concepts so that there should be less number of Components that gets re-renders (again gets called to update the state)
  const [title, setTitle] = useState(""); 
  const [description, setDescription] = useState("");

  const [allTodos, setAllTodos] = useState([{
    title: "Hello Todo 1",
    description: "Hello Todo 1"
  }, {
    title: "Hello Todo 2",
    description: "Hello Todo 2"
  }, {
    title: "Hello Todo 3",
    description: "Hello Todo 3"
  }])

  function addTodo() {
    const finalTitle = title;
    const finalDescription = description;

    setTitle("");
    setDescription("");

    setAllTodos([...allTodos, {
      title: finalTitle,
      description: finalDescription
    }])
  }
  
  return (
    <div className="todo-container" >
      {/* this will re-render when title and description gets updated */}
      <TodoInputMemo title={title} description={description} setTitle={setTitle} setDescription={setDescription} addTodo={addTodo} />
      
      {/* this will be only re-render when the allTodos gets updated using memo */}
      <AllTodosMemo allTodos={allTodos} />
    </div>
  )
}


export { TodoApp };

// Updation of state-variable leads to re-rendering of Parent + Child Components (if not using memo then all Children get re-render ) (if using memo with Children than only that Children will re-render whose state variable changes + Parent)