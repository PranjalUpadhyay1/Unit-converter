import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LengthConverter from './components/LengthConverter';
import AreaConverter from './components/AreaConverter';
import TempConverter from './components/TempConverter';
import WeightConverter from './components/WeightConverter';
import './App.css';

function App() {
  return (
    <Router basename="/">
      {/* Navbar component for navigation across different converters */}
      <Navbar />
      {/* Routes define the different paths and their corresponding components */}
      <Routes>
        {/* Default route for the length converter */}
        <Route path="/" element={<LengthConverter />} />
        {/* Route for the length converter */}
        <Route path="/length" element={<LengthConverter />} />
        {/* Route for the area converter */}
        <Route path="/area" element={<AreaConverter />} />
        {/* Route for the temperature converter */}
        <Route path="/temperature" element={<TempConverter />} />
        {/* Route for the weight converter */}
        <Route path="/weight" element={<WeightConverter />} />
      </Routes>
    </Router>
  );
}

export default App;
