import React from 'react';
import logo from './logo.svg';
import './App.css';
import SwithExample from "react-switch"
import {NumberList} from "./NumberList"
import { InventorsList } from './inventorsList';
import NameForm from './NameForm';

function myFunction(name, event) {
  console.log("Hello" + name +"!")
  console.log(event)
}

function App() {
  return (
    <div>
   {/* <button onclick="myFunction()">Old style</button> */}
   <button onClick={(event) => myFunction("Cosmin", event)}>New style</button>
   <button onClick={myFunction.bind(this,"Cosmin,")}>Bind me!</button>
   <SwithExample />
   <NumberList />
   <InventorsList />
   <NameForm />
   
   </div>
  );
}

export default App;
