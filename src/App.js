import Home from "./components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./components/About";
import styled from "@emotion/styled";
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/about" element={<About />} />

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
