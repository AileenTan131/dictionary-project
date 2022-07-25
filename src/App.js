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
          <small>
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/aileen-tan-878157b5/"
              className="footer-links"
            >
              Aileen Tan
            </a>
            ,{" "}
            <a
              href="https://github.com/Minim131/dictionary-project"
              className="footer-links"
            >
              open-sourced on Github
            </a>{" "}
            and hosted on Netlify
          </small>
        </footer>
      </div>
    </div>
  );
}
