// import logo from './logo.svg';
import "./App.css";
import { Provider } from "react-redux";
import { Counter } from "./Counter";
import store from "./store";
import { Character } from "./Character";

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Character />
    </Provider>
  );
}

export default App;
