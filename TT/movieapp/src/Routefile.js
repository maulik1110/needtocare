import About from "./Routefolder/About";
import "./App.css";
import Contact from "./Routefolder/Contact";
import Home from "./Home";
import Error from './Routefolder/Error'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Name from "./Routefolder/Name";

function App() {
  return (
    <>
      {/* // <Home /> */}
      {/* // <h1>HI, i am maulik</h1> */}
      <Routes>
        <Route exact path="/" Component={About}/>
        <Route path="/contact" Component={Contact}/>
        <Route path="/contact/name" Component={Name}/>
        <Route path="*" Component={Error}/>
      </Routes>
    </>
  );
}

export default App;
