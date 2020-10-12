import React from "react";


// const numbers = [1, 2, 3, 4, 5];

const toDos = [{
    id: 1,
    name: "first to do",},

   { id:2,
    name: "second to do",}
];

 export const NumberList = (props) => {
    return (
        <ul>
            {
                toDos.map((todo) => (
                <li key={todo.id}>{todo.name}</li>   ) )  }
        </ul>
    )
}