import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Signin from "./Components/Signin";
import LandingPage from "./Components/LandingPage";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Routes>
         <Route path="/" element={<LandingPage/>} />
         <Route path="/signin" element={<Signin/>} />

        </Routes>
    </>
  );
}

export default App;
