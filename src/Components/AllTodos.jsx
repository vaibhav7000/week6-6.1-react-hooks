import { memo } from "react"; // this allow the component to only gets re-render when the props passed to it gets changed => less components get re-render => more optimal websites as less DOM-manipulation happen


// adding memo
function AllTodos({ allTodos }) {

    return (
        <div className="all-todos">{allTodos.map((todo, index) => <TodoCard>
            <SingleTodo key={`${index}-random`} title={todo.title} description={todo.description} />
        </TodoCard>)}</div>
    )
}
// Wrapper-Component -> that takes other components as inputs
function TodoCard({ children }) {
    // this children is provide by the React
    // children refers to everything that is written inside TodoCard i.e SingleTodo

    return (
        <div className="todo-wrapper">
            {children}
        </div>
    )
}


function SingleTodo({ title, description }) {

    return (
        <div>
            <div>{title}</div>
            <div>{description}</div>
        </div>
    )
}


const AllTodosMemo = memo(AllTodos);

export {AllTodosMemo};

// Hooks were introducted in functional components to minic / replace the life-cycle methods of the class-base-components ( hooks where introdcued to hook into the life-cycle methods of the class-base-components )

//  useEffect is kind of replace of the onComponentMount (mount means -> component gets intially render on the screen ), => useEffect is used to call a function / side effect after the component gets rendered on the screen ( mounts on the screen )

// Syntax to use useEffect for side effects ( calling function after the component mounts )
//  useEffect(sideEffect_Function, [depenpency array ( contains props as state variable or diretly state_variables)])

// 1. useEffect(function) -> no-dependency_array => this side_effect will be called everytime when the component gets re-render or render

// 2. useEffect(function, []) -> empty dependency array -> the side_effect function will be called on once when the component mounts 

// 3. useEffect(function,[ state_variables ])
// the dependency_array contains either state_variables or props but passed as state_variables (=> when the state variable changes the side_effect will be called)

// IMPORTANT SYNTAX OF useEffect hook
// the side_effect function can also return a function ( cleanup function ), this function is generally returned to clean the previous side_effect services (event-listners, setTimeout, setInterval things )

// Execution of the cleanup function
// 1. when the component gets re-render again and if there is any chance that the useEffect will be called then before the side_effect function executes the cleanup function will be executed

// 2. When the component gets unmount / removeded from the DOM => cleanup function will be executed


// re-rendering (updation of the webpage) will happen when the state_variables changes => The component that has the state_variable will be re-renders (will be called again by react but with updated state) + its Child Components. To make optimize website there should be less components that get re-render => only those component should be updated that is using the state_variable. This will be implemented using "memo"

// "memo" stops the unecessary re-renders of the child components when parent component re-renders, the child component will only gets re-rendered when the state_variable passed to it gets changed.


// useCallback Hook ( for functions only )
// Whenever the component re-renders, "the normal_variables and functions" present inside the components gets re-created => new references are created  => if functions are passed to the child components they will also get re-render because the refernce changes, =>
    // useCallback should wrap the function, this will be lead to no new creation of the callback function when the parent re-renders + if using memo with child component then child will also not get re-render