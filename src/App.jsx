import React from 'react';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import Mainpage from './components/mainpage';
import Detailpage from './components/detailpage';
import data from './components/data';
import Navbar from './components/Navbar';
function App() {
  let navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/detail" element={<Detailpage />} />
        <Route
          path="/about"
          element={<div className="text-black">어바웃타임ㅋㅋ</div>}
        />
        <Route path="/" element={<Mainpage shoes={data} />} />
      </Routes>
    </div>
  );
}

export default App;
