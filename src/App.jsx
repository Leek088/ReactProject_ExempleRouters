import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

//Components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

function App() {
    return (
        <>
            <h1>React Router</h1>
            <BrowserRouter>
                <Navbar />
                <SearchForm />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/sobre_empresa" element={<Navigate to="/about" />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
