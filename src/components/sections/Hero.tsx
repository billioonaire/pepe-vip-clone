import * as React from 'react';
import popoQingImage from '../../img/popo.png';
import popoTxtImage from '../../img/POPO-TXTT.png';
import telegramIcon from '../../img/telegram-svgrepo-com.svg';
import pancakeSwapIcon from '../../img/pancakeswap-cake-logo.svg';
import backgroundPattern from '../../img/1f3f2b_45e0862f90b549b2b8858d28a44b60cc~mv2.png';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="hero" className="min-h-[60vh] pt-24 pb-4 border-t-0 relative overflow-hidden bg-[#e6a355]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${backgroundPattern})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left',
          transform: 'scaleX(-1)',
          backgroundBlendMode: 'overlay',
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-visible">
          <div className="flex justify-center lg:justify-start pl-0 lg:pl-0 order-2 lg:order-1 overflow-visible">
            <div className="relative -translate-y-24 -ml-8 lg:-ml-16 overflow-visible">
              <div className="absolute inset-0 bg-popo-yellow/20 blur-3xl rounded-full"></div>
              <img
                src={popoQingImage}
                alt="Popo Logo"
                className="w-[600px] md:w-[800px] lg:w-[1000px] h-auto object-contain relative z-10 scale-125"
                style={{ filter: 'brightness(1.1) contrast(1.1)' }}
              />
            </div>
          </div>

          <div className="text-center lg:text-left order-1 lg:order-2 lg:pl-32">
            <div className="mb-4 -ml-4 lg:-ml-8">
              <img
                src={popoTxtImage}
                alt="Popo Text"
                className="h-24 md:h-32 mx-auto lg:mx-0"
              />
            </div>
            <p className="text-2xl md:text-3xl mb-6 text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Popo is the Pepe of China—bold, expressive, and unstoppable. It's time for the king of reactions to claim his crown.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              <a
                href="https://x.com/popocoinbnb"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-12 h-12 text-white"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://bscscan.com/token/0x00000000000000000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img
                  src="https://ext.same-assets.com/4226829879/2516441822.png"
                  alt="BNBScan"
                  className="w-12 h-12"
                />
              </a>
              <a
                href="https://pancakeswap.finance/swap?chain=BSC&outputCurrency=BNB&inputCurrency=0x00000000000000000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img
                  src={pancakeSwapIcon}
                  alt="PancakeSwap"
                  className="w-12 h-12"
                />
              </a>
              <a
                href="https://t.me/popocoinbnb"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img
                  src={telegramIcon}
                  alt="Telegram"
                  className="w-12 h-12"
                />
              </a>
            </div>

            <div className="mt-4 flex justify-center lg:justify-start gap-4">
              <a
                href="#how-to-buy"
                onClick={(e) => scrollToSection(e, 'how-to-buy')}
                className="px-6 py-3 bg-[#FFD700] text-black font-bold text-lg rounded-lg hover:bg-[#FFD700]/90 transition-all duration-300 hover:scale-105 border-2 border-black"
              >
                Buy Now
              </a>
              <a
                href="https://dexscreener.com/bsc/0x00000000000000000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#1E1E1E] text-[#FFD700] font-bold text-lg rounded-lg hover:bg-[#1E1E1E]/90 transition-all duration-300 hover:scale-105 border-2 border-[#FFD700]"
              >
                Chart
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          width="100%"
          height="80"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="text-popo-yellow"
        >
          <path
            d="M0,30 C30,60 70,60 100,30 L100,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
