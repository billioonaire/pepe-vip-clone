import * as React from 'react';
import rightSideImage from '../../img/right-side.png';

const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="pt-32 pb-0 relative overflow-hidden">
      {/* Base background color */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Chinese pattern background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(255, 255, 0, 0.15) 0px, rgba(255, 255, 0, 0.15) 1px, transparent 1px, transparent 10px),
            repeating-linear-gradient(-45deg, rgba(255, 255, 0, 0.15) 0px, rgba(255, 255, 0, 0.15) 1px, transparent 1px, transparent 10px)
          `,
          opacity: 0.4
        }}
      ></div>

      {/* Left side image (flipped) */}
      <div className="absolute left-0 bottom-0 w-[400px] lg:w-[600px] pointer-events-none">
        <img
          src={rightSideImage}
          alt="Left Side"
          className="w-full h-auto scale-x-[-1]"
        />
      </div>

      {/* Right side image */}
      <div className="absolute right-0 bottom-0 w-[400px] lg:w-[600px] pointer-events-none">
        <img
          src={rightSideImage}
          alt="Right Side"
          className="w-full h-auto"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-biaoQing-yellow font-heading">TOKENOMICS</h2>
          <p className="text-2xl text-white/70">代币经济学</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto px-4 mb-32">
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-biaoQing-yellow/20">
            <h3 className="text-2xl font-bold mb-4 text-biaoQing-yellow">Token Supply</h3>
            <p className="text-3xl md:text-4xl font-bold text-white mb-2">1,000,000,000</p>
            <p className="text-sm text-white/80">Total supply of $POPO tokens</p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-biaoQing-yellow/20">
            <h3 className="text-2xl font-bold mb-4 text-biaoQing-yellow">Taxes</h3>
            <p className="text-3xl md:text-4xl font-bold text-white mb-2">0%</p>
            <p className="text-sm text-white/80">No buy or sell taxes</p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-biaoQing-yellow/20">
            <h3 className="text-2xl font-bold mb-4 text-biaoQing-yellow">Liquidity</h3>
            <p className="text-3xl md:text-4xl font-bold text-white mb-2">100%</p>
            <p className="text-sm text-white/80">Locked liquidity</p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-biaoQing-yellow/20">
            <h3 className="text-2xl font-bold mb-4 text-biaoQing-yellow">Ownership</h3>
            <p className="text-3xl md:text-4xl font-bold text-white mb-2">Renounced</p>
            <p className="text-sm text-white/80">Contract ownership renounced</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
