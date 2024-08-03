import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Lista from "./pages/Lista";
import './App.css';
import Header from './componentes/Header';


function App() {
  return (
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/lista" element={<Lista />} />
          </Routes>
        </Router>
      </div>
  );
} 

export default App; 
