import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Puzzle from "./components/Puzzle";
import Upload from "./components/Upload";

function App() {
  return (
    <div className="App-header">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/puzzle" element={<Puzzle />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
