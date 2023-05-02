import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <div class="footer">
        This project was created by Ashley Blaine and is{" "}
        <a
          href="https://github.com/a-blaine/react-weather"
          target="_blank"
          rel="noreferrer noopener"
        >
          open sourced
        </a>{" "}
        on GitHub
      </div>
    </div>
  );
}

export default App;
