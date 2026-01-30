import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import ProductDetail from './pages/ProductDetail';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PostAd from './pages/PostAd';
import './App.css';

// Placeholder components during setup
const Placeholder = ({ title }) => (
  <div style={{ padding: '4rem', textAlign: 'center' }}>
    <h2>{title}</h2>
    <p>Coming Soon</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/post-ad" element={<PostAd />} />
            <Route path="*" element={<Placeholder title="404 - Not Found" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
