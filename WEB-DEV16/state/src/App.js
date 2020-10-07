import React from'react';
import Clock from './clock';
import Counter from "./Counter";
import Dialog from "./Dialog";


const App = () => {
    return <div>
        <Counter />
        <Dialog />
        <Clock />
        <Clock />
        <Clock />
    </div>
}

export default App;

