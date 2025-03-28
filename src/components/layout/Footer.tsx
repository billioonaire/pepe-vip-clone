import React from 'react';
import popoImage from '../../img/popo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-popo-black to-popo-dark py-8 text-white/70 text-xs">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4">
            <a
              href="https://x.com/popocoinbnb"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-popo-yellow transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <div className="flex items-center">
              <img
                src={popoImage}
                alt="Popo Logo"
                className="h-8 rounded-full border border-popo-yellow/50 mix-blend-screen"
              />
              <span className="ml-2 text-popo-yellow font-bold">Popo</span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-center">
            <p>
              $POPO is a meme coin with no intrinsic value or expectation of financial return.
            </p>
          </div>

          <div className="text-xs whitespace-nowrap flex flex-col items-center">
  
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
