import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Pages
import Home from './pages/Home';
import About from './pages/About';
//Components
import Navbar from './components/Navbar';

function App() {
    return (
        <>
            <h1>React Router</h1>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
