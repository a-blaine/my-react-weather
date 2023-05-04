import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Ilsan" />
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
    </div>
  );
}

export default App;
