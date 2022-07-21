import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Dictionary defaultKeyword="food" />
        </header>
        <footer className="App-footer">
          <small>Coded by Aileen Tan</small>
        </footer>
      </div>
    </div>
  );
}
