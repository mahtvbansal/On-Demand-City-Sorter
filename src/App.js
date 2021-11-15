import './App.css';
import Input from './Components/Input';
import Output from './Components/Output';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          
      </div>
      <Routes>
          <Route path="/" element={<Input/>} />

          <Route path="/output" element={<Output/>} />

        </Routes>
    </Router>
  );
}

export default App;
