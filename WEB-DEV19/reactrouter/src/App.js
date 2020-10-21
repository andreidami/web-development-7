import React from "react";
import { BrowserRouter, Route, Link,  Switch } from "react-router-dom";
import {Users} from "./Users"
import {About} from "./About"


const Home = (props) => <h2>Home Page</h2>;



function App() {
  return (
    <BrowserRouter>
    <div>
   <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>

    </nav>
    </div>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/users/:id" component={Users} />
      <Route path="/users" component={Users} />
      </Switch>
       </BrowserRouter>
  );
}

export default App;
