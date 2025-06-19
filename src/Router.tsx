import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Comparison from './pages/Comparison';

export default function AppRouter() {
    return (
        <Router basename="/portfolio">
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/comparison" element={<Comparison />} />
        </Routes>
        </Router>
    );
}
