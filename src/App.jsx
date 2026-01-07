import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Footer Placeholder */}
      <footer className="bg-brand-black text-white py-12">
        <div className="container mx-auto px-6 text-center text-gray-400 text-sm">
          &copy; 2025 한국광고연구소 (Korea Advertising Research Institute). All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
