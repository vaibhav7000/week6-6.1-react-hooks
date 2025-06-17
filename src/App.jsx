import { Header } from "./Components/Header.jsx";
import React, { Fragment, useState } from "react";
import HeaderWithButton from "./Components/HeaderWithButton.jsx";


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