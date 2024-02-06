import About from "./Routefolder/About";
import "./App.css";
import Contact from "./Routefolder/Contact";
import Home from "./Home";
import Error from './Routefolder/Error'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Name from "./Routefolder/Name";
import Smovie from './Smovie'
import ConA from "./Components/useContext/ConA";

function App() {
  return (
    <>
    <ConA/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="movies/:userid" Component={Smovie}/>
        <Route path="/contact/name" Component={Name}/>
        <Route path="*" Component={Error}/>
      </Routes>
    </>
  );
}

export default App;
