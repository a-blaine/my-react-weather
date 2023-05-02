import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was created by Ashley Blaine and is{" "}
        <a
          href="https://github.com/a-blaine/my-react-weather"
          target="_blank"
          rel="noreferrer noopener"
        >
          open sourced
        </a>{" "}
        on GitHub
      </footer>
    </div>
  );
}

export default App;
