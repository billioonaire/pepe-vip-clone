import { useState, useEffect } from 'react';
import popoQingImage from '../../img/popo.png';
import popoTxtImage from '../../img/POPO-TXTT.png';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: '首页', href: '#' },
  { label: '关于', href: '#about' },
  { label: '如何购买', href: '#how-to-buy' },
  { label: '跨链桥', href: 'http://bridge.biao.vip' },
  { label: '代币经济学', href: '#tokenomics' },
  { label: '路线图', href: '#roadmap' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-biaoQing-black/95 shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom py-6 flex items-center justify-between">
        <div className="flex items-center gap-4 -ml-4 md:-ml-8">
          <div className="relative flex items-center">
            <img
              src={popoQingImage}
              alt="PopoLogo"
              className="h-10 md:h-14 mix-blend-screen object-contain"
              style={{ marginTop: '0' }}
            />
          </div>
          <img
            src={popoTxtImage}
            alt="PopoText"
            className="h-10 md:h-14 object-contain"
            style={{ marginTop: '0' }}
          />
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-biaoQing-black/90 backdrop-blur-md animate-fade-in">
          <div className="container-custom py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-white hover:text-biaoQing-yellow py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                <span className="ml-2 text-xs text-white/50">{link.label === '首页' ? 'HOME' : 
                  link.label === '关于' ? 'ABOUT' : 
                  link.label === '如何购买' ? 'HOW TO BUY' : 
                  link.label === '跨链桥' ? 'BRIDGE' : 
                  link.label === '代币经济学' ? 'TOKENOMICS' : 'ROADMAP'}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
