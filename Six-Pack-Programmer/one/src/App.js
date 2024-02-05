import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Home.css";
import "./styles/Footer.css";
import "./styles/services.css";
import "./styles/Contact.css";
import Footer from "./Components/Footer"
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import "./styles/Media.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./Contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
