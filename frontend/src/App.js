import './App.css';
// import Create from './components/Create';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
       <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/Create" element={<Create />} /> */}
      </Routes>
    </div>
  );
}

export default App;
