import "./App.css";
import Header from "./Pages/Share/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Reviews from "./Pages/Reviews/Reviews";
import Appointment from "./Pages/Appointment/Appointment";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path='/' element={} />
        <Route path='/' element={} />
        <Route path='/' element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
