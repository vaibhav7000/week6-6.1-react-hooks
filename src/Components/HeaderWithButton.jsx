import { useState } from "react";
import { Header } from "./Header";

function HeaderWithButton() {
    const [title, setTitle] = useState("Hello JS");

    return (
        <div>
            <button onClick={function() {
                setTitle("My name is " + Math.random());
            }} >Set title</button>

            <Header title={title}/>
        </div>
    )
}

export default HeaderWithButton;