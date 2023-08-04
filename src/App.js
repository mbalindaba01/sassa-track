import './App.css';
import Outcome from './components/OutcomeCard';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Outcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
