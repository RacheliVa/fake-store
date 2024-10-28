import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Jewelry from './component/Jewelry/Jewelry.jsx';
import Electronics from './component/Electronics/Electronics.jsx';
import Books from './component/Books/Books.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <h1>Welcome</h1>
          <nav>
            {/* <Link to="/">Home</Link> | */}
            <Link to="/Jewelry">Jewelry</Link> |
            <Link to="/Electronics">Electronics</Link> |
            <Link to="/Books">Books</Link>
          </nav>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/Jewelry" element={<Jewelry />} />
            <Route path="/Electronics" element={<Electronics />} />
            <Route path="/Books" element={<Books/>} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
