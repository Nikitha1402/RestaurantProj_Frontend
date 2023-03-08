import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Getdet from "./Components/Getdet";
import Update from "./Components/Update";
import Deleteform from "./Components/Deleteform";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Work" element={<Work />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Getdet" element={<Getdet />}></Route>
      <Route path="/Update" element={<Update />}></Route>



      <Route path="/Deleteform" element={<Deleteform />}></Route>
      <Route path="/Footer" element={<Footer />}></Route>  
      </Routes>
      </div>
      <About/>
      <Work/>
      <Contact/>
      </Router>
  );
}

export default App;