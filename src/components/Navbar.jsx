import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center">
            <span className="text-brand-black font-bold text-lg">K</span>
          </div>
          <span className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-gray-900'} font-sans`}>한국광고연구소</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#research" className="text-gray-600 hover:text-brand-yellow font-medium transition-colors">연구 분야</a>
          <a href="#education" className="text-gray-600 hover:text-brand-yellow font-medium transition-colors">교육 프로그램</a>
          <a href="#community" className="text-gray-600 hover:text-brand-yellow font-medium transition-colors">커뮤니티</a>
          <a href="#about" className="text-gray-600 hover:text-brand-yellow font-medium transition-colors">소개</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-brand-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl">
            문의하기
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4">
          <a href="#research" className="text-gray-600 hover:text-brand-yellow font-medium py-2">연구 분야</a>
          <a href="#education" className="text-gray-600 hover:text-brand-yellow font-medium py-2">교육 프로그램</a>
          <a href="#community" className="text-gray-600 hover:text-brand-yellow font-medium py-2">커뮤니티</a>
          <a href="#about" className="text-gray-600 hover:text-brand-yellow font-medium py-2">소개</a>
          <button className="bg-brand-black text-white px-6 py-3 rounded-lg font-medium w-full">
            문의하기
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
