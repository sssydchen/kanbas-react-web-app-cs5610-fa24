/* 
  Yifan Chen
*/

import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";

export default function Labs() {
  return (
    <div className="container mt-4">
      <div className="text-left mb-4">
      <h3>Yifan Chen  CS 5610 SEC 02</h3>
      <h2>Labs</h2>
      <TOC />
      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
      </Routes>
    </div>
    </div>
  );
}




