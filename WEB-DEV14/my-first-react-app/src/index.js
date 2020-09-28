import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import"./index.css";

// const user = {
//   firstName: "cosmin",
//   lastNmame: "pruteanu"
// }


  
  // const formatName = (user) => {
    // return user.firstName + " " + user.lastNmame;
  // };

  const now = new Date();

  // function tick() {const element = (
    // <div>
      // <h1>Hell wats the clock</h1>
      // <h2>It is {new Date().toLocaleTimeString()}</h2>
    // </div>);
    // ReactDOM.render(element, document.getElementById("root"));
  // };

  // setInterval(tick, 1000)
    



// ReactDOM.render(
  // <React.StrictMode>
    // { <h1>Hello fancy react app! {2 + 2}</h1> */}
    
  // </React.StrictMode>,

  // {now.toLocateTimeString()}
  // <h1>
    // {formatName(user)}
    // {now.toLocateTimeString()}
  // </h1>,
  // document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


const imageUrl = "https://images.unsplash.com/photo-1601218291833-c65a25b08daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

// ReactDOM.render(
//   <div className="container">
//   <img src={imageUrl}/>

//   <img src="https://images.unsplash.com/photo-1600194992333-6288c563093e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
//   </div>,
//   document.getElementById("root")
// );


const element = <h1 className="container">Hello !!!</h1>


ReactDOM.render(element, document.getElementById("root"))

serviceWorker.unregister();
