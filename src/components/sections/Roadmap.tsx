import * as React from 'react';

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-biaoQing-yellow font-heading">ROADMAP</h2>
          <p className="text-white/70 text-lg">路线图</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-pepeGreen-dark p-8 rounded-lg max-w-md w-full text-center mb-12">
            <div className="mb-4">
              <h3 className="font-bold text-xl">Phase 1</h3>
              <p className="text-2xl font-bold">Meme</p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-xl">Phase 2</h3>
              <p className="text-2xl font-bold">Vibe and HODL</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">Phase 3</h3>
              <p className="text-2xl font-bold">Meme Takeover</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src="https://ext.same-assets.com/4226829879/812065735.png"
                alt="Pepe Meme"
                className="max-w-xs w-full"
              />
            </div>

            <div className="flex justify-center">
              <img
                src="https://ext.same-assets.com/4226829879/2622907109.png"
                alt="Pepe with MAGA Hat"
                className="max-w-xs w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
