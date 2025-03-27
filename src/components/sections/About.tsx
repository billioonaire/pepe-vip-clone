import * as React from 'react';
import popoXImage from '../../img/popo-x.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[#1a1a1a]">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${new URL('../../img/chinese-background.jpg', import.meta.url).href})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-heading">ABOUT</h2>
          <p className="text-white/70 text-lg">关于我们</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="mx-auto md:mx-0">
            <div className="relative">
              <img
                src={popoXImage}
                alt="PopoX"
                className="max-w-md w-full rounded-lg border-4 border-black shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-6 text-lg text-white/90 p-8 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg h-full">
            <p>
              Popo is tired of seeing the same old memecoins with no cultural significance. 
              The era of simple meme tokens is over. It's time for the rich visual language 
              of Chinese internet culture to take its place in the crypto world.
            </p>

            <p>
              Popo represents the vibrant, expressive, and unique visual language of Chinese internet culture. 
              Each Popo carries emotions, ideas, and cultural references that transcend text, 
              creating a universal language of expression that connects people across borders.
            </p>

            <div className="mt-8 flex space-x-4">
              <div className="p-3 bg-biaoQing-red/20 backdrop-blur-sm rounded-lg border border-biaoQing-red/30 flex-1 text-center">
                <h3 className="text-biaoQing-yellow font-bold mb-2">文化</h3>
                <p className="text-sm text-white/80">Cultural significance</p>
              </div>
              <div className="p-3 bg-biaoQing-blue/20 backdrop-blur-sm rounded-lg border border-biaoQing-blue/30 flex-1 text-center">
                <h3 className="text-biaoQing-yellow font-bold mb-2">表达</h3>
                <p className="text-sm text-white/80">Expression beyond words</p>
              </div>
              <div className="p-3 bg-biaoQing-green/20 backdrop-blur-sm rounded-lg border border-biaoQing-green/30 flex-1 text-center">
                <h3 className="text-biaoQing-yellow font-bold mb-2">社区</h3>
                <p className="text-sm text-white/80">Community driven</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
