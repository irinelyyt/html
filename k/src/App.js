import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="buttoncontainer">
          <MyButton></MyButton>
        </div>
        <div className="buttoncontainer1">
          <ul>
            <li>min humidity__%</li>
            <li className="max">max humidity__%</li>
            <li>min temperature__%</li>
            <li>max temperature__%</li>
          </ul>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          no
        </a>
      </header>
    </div>
  );
}
function MyButton() {
  return <button>I'm a button</button>;
}
export default App;
