import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import HowToBuy from './components/sections/HowToBuy';
import Tokenomics from './components/sections/Tokenomics';

function App() {
  return (
    <div className="min-h-screen bg-biaoQing-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <HowToBuy />
        <Tokenomics />
      </main>
      <Footer />
    </div>
  );
}

export default App;
