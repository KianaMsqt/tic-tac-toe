import "./App.css";
import Square from "./components/Square";

function App() {
  return (
    <div className="app">
      <main className="app-body">
        <h1>TIC-TAC-TOE</h1>
        <div className="board">
          <div className="board-row">
            <Square value="1" />
            <Square value="2" />
            <Square value="3" />
          </div>
          <div className="board-row">
            <Square value="1" />
            <Square value="2" />
            <Square value="3" />
          </div>
          <div className="board-row">
            <Square value="1" />
            <Square value="2" />
            <Square value="3" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
