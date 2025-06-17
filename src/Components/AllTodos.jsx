import { memo } from "react"; // this allow the component to only gets re-render when the props passed to it gets changed => less components get re-render => more optimal websites as less DOM-manipulation happen


// adding memo
function AllTodos({ allTodos }) {

    return (
        <div className="all-todos">{allTodos.map((todo, index) => <SingleTodo key={`${index}-random`} title={todo.title} description={todo.description} />)}</div>
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