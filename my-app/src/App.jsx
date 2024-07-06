import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import StudentDetails from './Components/StudentDetails';
import StudentEntry from './Components/StudentEntry';
function App() {
    return (
        <>
        <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<StudentDetails />} />
                    <Route path="/student" element={<StudentEntry />} />
                </Routes>
        </Router>
        </>
        
    );
}

export default App;
