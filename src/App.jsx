
import Home from "./pages/homePage";
import './App.css';
import Nav from "./pages/navBar";
import Create from "./pages/createBlog";
import  { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homePage" element={<Home />} />
          <Route path="/createBlog" element={<Create />} />
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
