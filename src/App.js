import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/App.css"
import AddMedia from "./scenes/AddMedia.js";
import Searchpage from "./scenes/Searchpage.js";
import Homepage from "./scenes/Homepage";
import Grid1 from "./scenes/Grid1";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">  
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/searchpage" element={<Searchpage/>} />
        <Route path="/add" element={<AddMedia/>} />
        <Route path="/:sign" element={<Grid1/>} />
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
