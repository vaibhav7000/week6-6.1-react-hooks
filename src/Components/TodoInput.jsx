import { memo } from "react";

function TodoInput({ title, description, setTitle, setDescription, addTodo }) {

    return (
        <div className="input-container">
            <div className="title">
                <label htmlFor="">Title</label>
                <input onInput={function(event) {
                    const element = event.target;
                    const value = element.value;

                    setTitle(value)
                }} id="title" name="title" placeholder="Enter todo title" value={title} />
            </div>

            <div className="description">
                <label htmlFor="description">Description</label>
                <input onInput={function(event) {
                    const element = event.target; // dom-html element
                    const value = element.value;

                    setDescription(value);
                }} id="description" name="description" placeholder="Enter todo description" value={description} />
            </div>

            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

// This Component should be re-render only when the title and description should gets updated => wrapped that in React memo

const TodoInputMemo = memo(TodoInput);

export default TodoInputMemo;

// the state-variables should never be passed from child to Parent. Always declare in Parent and Pass them as Props

// React re-renders / refreshes the website when the state-variables changes, specifically the Component that has the state-variable declared will re-renders and all the Child Components get re-render ( we want less components to get re-render (optimal application) )