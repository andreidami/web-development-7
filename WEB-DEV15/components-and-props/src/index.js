import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';



// function Welcome(props) {
//  return <h1>Hello, {props.name}</h1>; 
// }

// class Welcome extends Component {
//   render () {
//   return <h1>Hello ! {this.props.name}</h1>;
//   }
// }





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
