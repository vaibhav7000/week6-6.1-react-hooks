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