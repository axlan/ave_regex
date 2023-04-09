
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Lovers from './pages/lovers';
import Fool from './pages/fool';

function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/lovers' element={<Lovers/>} />
        <Route path='/fool' element={<Fool/>} />
    </Routes>
    </Router>
);
}

export default App;
