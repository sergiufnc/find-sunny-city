import logo from "./logo.svg";
import "./App.css";

function App() {
  // create a button that will call a function that returns a random number
  // between 1 and 100

  // create a function that returns a random number between 1 and 100
  function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // create a function that will be called when the button is clicked
  function handleClick() {
    // call the getRandomNumber function and store the result in a variable
    const randomNumber = getRandomNumber();
    // log the result to the console
    console.log(randomNumber);
  }

  // create a button that will call the handleClick function when clicked
  function Button() {
    return <button onClick={handleClick}>Click me!</button>;
  }

  // render the button
  return <Button />;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
