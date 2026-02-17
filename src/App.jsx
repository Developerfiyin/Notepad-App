import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Signin from "./Components/Signin";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
