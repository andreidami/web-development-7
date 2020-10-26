// import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import Counter from "./Counter"
import EmailList from "./EmailList"

function App() {
  return (
    <Provider store={store}>
<Counter/>
<EmailList/>
    </Provider>

 
  );
}

export default App;
