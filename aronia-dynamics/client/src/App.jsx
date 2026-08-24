import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* We will add About, Contact, etc. here soon! */}
      </Routes>
    </div>
  );
}

export default App;