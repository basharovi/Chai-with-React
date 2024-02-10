import logo from "./logo.svg";
import "./App.css";
import HeyChai from "./Chai";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <HeyChai />
      </header>
    </div>
  );
}

export default App;
