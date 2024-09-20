import React from "react";
// import logo from './logo.svg';
// import './App.css';
import Labs from "./Labs";
import { HashRouter,Route, Routes, Navigate } from "react-router-dom";
import Kanbas from "./Kanbas";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}


export default App;
