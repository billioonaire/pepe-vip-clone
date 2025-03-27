import * as React from 'react';
import walletIcon from '../../img/wallet-svgrepo-com.svg';
import bnbIcon from '../../img/bnb-svgrepo-com.svg';
import pancakeSwapIcon from '../../img/pancakeswap-cake-logo.svg';
import swapIcon from '../../img/swap-duotone-svgrepo-com.svg';

interface StepProps {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  number: number;
}

const Step: React.FC<StepProps> = ({ title, description, icon, iconAlt, number }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 relative">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-biaoQing-red to-biaoQing-red/80 flex items-center justify-center">
          <span className="font-bold text-2xl text-white absolute">{number}</span>
        </div>
      </div>
      <div className="flex-1 p-6 bg-[#111]/80 backdrop-blur-sm border border-[#333] rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-biaoQing-yellow">
            {title}
          </h3>
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-[#F0B90B] to-[#F8D33A] flex-shrink-0 -mr-1">
            {icon === bnbIcon ? (
              <img src={icon} alt={iconAlt} className="w-full h-full object-contain" />
            ) : icon === pancakeSwapIcon ? (
              <div className="w-full h-full flex items-center justify-center p-0.5">
                <img src={icon} alt={iconAlt} className="w-full h-full object-contain" />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center p-1 bg-[#F0B90B]">
                <img src={icon} alt={iconAlt} className="w-full h-full object-contain" />
              </div>
            )}
          </div>
        </div>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
    </div>
  );
};

const HowToBuy: React.FC = () => {
  const [copied, setCopied] = React.useState(false);
  const tokenAddress = "0x00000000000000000000000";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="how-to-buy" className="py-20 bg-[#0F0F0F] relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 right-10 text-8xl font-bold text-biaoQing-yellow rotate-12">表</div>
        <div className="absolute bottom-20 left-10 text-8xl font-bold text-biaoQing-yellow -rotate-12">情</div>
        
        {/* First set of Chinese characters */}
        <div className="absolute top-40 left-20 text-7xl font-bold text-biaoQing-yellow -rotate-6">模</div> {/* meme */}
        <div className="absolute top-60 right-20 text-7xl font-bold text-biaoQing-yellow rotate-6">熊</div> {/* panda */}
        <div className="absolute bottom-60 right-40 text-7xl font-bold text-biaoQing-yellow rotate-12">社</div> {/* community */}
        <div className="absolute top-1/3 left-1/4 text-6xl font-bold text-biaoQing-yellow -rotate-3">买</div> {/* buy */}
        <div className="absolute top-2/3 right-1/4 text-6xl font-bold text-biaoQing-yellow rotate-3">卖</div> {/* sell */}
        <div className="absolute bottom-1/3 left-1/3 text-6xl font-bold text-biaoQing-yellow -rotate-9">交</div> {/* trade */}
        <div className="absolute top-1/4 right-1/3 text-5xl font-bold text-biaoQing-yellow rotate-15">币</div> {/* coin */}
        <div className="absolute bottom-1/4 right-2/3 text-5xl font-bold text-biaoQing-yellow -rotate-15">赚</div> {/* earn */}
        
        {/* Second set of Chinese characters */}
        <div className="absolute top-[15%] left-[25%] text-5xl font-bold text-biaoQing-yellow rotate-[8deg]">财</div> {/* wealth */}
        <div className="absolute top-[25%] right-[35%] text-4xl font-bold text-biaoQing-yellow -rotate-[5deg]">福</div> {/* fortune */}
        <div className="absolute top-[40%] left-[45%] text-6xl font-bold text-biaoQing-yellow rotate-[-10deg]">猫</div> {/* cat */}
        <div className="absolute top-[55%] right-[25%] text-7xl font-bold text-biaoQing-yellow rotate-[20deg]">狗</div> {/* dog */}
        <div className="absolute top-[65%] left-[15%] text-5xl font-bold text-biaoQing-yellow -rotate-[25deg]">笑</div> {/* laugh */}
        <div className="absolute top-[85%] right-[45%] text-4xl font-bold text-biaoQing-yellow rotate-[-15deg]">玩</div> {/* play */}
        <div className="absolute top-[75%] left-[55%] text-6xl font-bold text-biaoQing-yellow rotate-[5deg]">乐</div> {/* joy */}
        <div className="absolute top-[35%] left-[35%] text-4xl font-bold text-biaoQing-yellow rotate-[30deg]">网</div> {/* web */}
        <div className="absolute top-[60%] right-[15%] text-7xl font-bold text-biaoQing-yellow -rotate-[20deg]">人</div> {/* person */}
        <div className="absolute top-[18%] left-[85%] text-5xl font-bold text-biaoQing-yellow rotate-[10deg]">友</div> {/* friend */}
        <div className="absolute top-[50%] right-[75%] text-4xl font-bold text-biaoQing-yellow -rotate-[5deg]">钱</div> {/* money */}
        <div className="absolute top-[85%] left-[35%] text-6xl font-bold text-biaoQing-yellow rotate-[15deg]">富</div> {/* rich */}
        <div className="absolute top-[73%] right-[45%] text-5xl font-bold text-biaoQing-yellow rotate-[-8deg]">强</div> {/* strong */}
        <div className="absolute top-[45%] left-[25%] text-4xl font-bold text-biaoQing-yellow rotate-[22deg]">兴</div> {/* prosper */}
        <div className="absolute top-[92%] right-[35%] text-6xl font-bold text-biaoQing-yellow -rotate-[18deg]">牛</div> {/* bull */}
        <div className="absolute top-[28%] left-[15%] text-5xl font-bold text-biaoQing-yellow rotate-[14deg]">龙</div> {/* dragon */}
        
        {/* Additional characters to fill blank spaces */}
        <div className="absolute top-[15%] left-[15%] text-4xl font-bold text-biaoQing-yellow rotate-[11deg]">智</div> {/* wisdom */}
        <div className="absolute top-[95%] right-[15%] text-4xl font-bold text-biaoQing-yellow -rotate-[7deg]">慧</div> {/* intelligence */}
        <div className="absolute top-[38%] right-[38%] text-5xl font-bold text-biaoQing-yellow rotate-[16deg]">幸</div> {/* happiness */}
        <div className="absolute top-[70%] left-[32%] text-5xl font-bold text-biaoQing-yellow -rotate-[13deg]">运</div> {/* luck */}
        <div className="absolute top-[25%] left-[42%] text-6xl font-bold text-biaoQing-yellow rotate-[3deg]">信</div> {/* trust */}
        <div className="absolute top-[48%] right-[42%] text-4xl font-bold text-biaoQing-yellow rotate-[-21deg]">任</div> {/* responsibility */}
        <div className="absolute top-[88%] left-[88%] text-5xl font-bold text-biaoQing-yellow -rotate-[14deg]">市</div> {/* market */}
        <div className="absolute top-[78%] right-[88%] text-4xl font-bold text-biaoQing-yellow rotate-[25deg]">场</div> {/* place */}
        <div className="absolute top-[58%] left-[98%] text-5xl font-bold text-biaoQing-yellow rotate-[-10deg]">投</div> {/* invest */}
        <div className="absolute top-[82%] right-[33%] text-4xl font-bold text-biaoQing-yellow rotate-[4deg]">资</div> {/* capital */}
        <div className="absolute top-[12%] right-[58%] text-5xl font-bold text-biaoQing-yellow rotate-[-2deg]">机</div> {/* opportunity */}
        <div className="absolute top-[32%] right-[98%] text-4xl font-bold text-biaoQing-yellow rotate-[19deg]">会</div> {/* gathering */}
        <div className="absolute top-[68%] right-[14%] text-5xl font-bold text-biaoQing-yellow rotate-[9deg]">技</div> {/* skill */}
        <div className="absolute top-[56%] left-[14%] text-4xl font-bold text-biaoQing-yellow -rotate-[17deg]">术</div> {/* art */}
        <div className="absolute top-[42%] right-[92%] text-5xl font-bold text-biaoQing-yellow rotate-[28deg]">价</div> {/* price */}
        <div className="absolute top-[86%] right-[70%] text-4xl font-bold text-biaoQing-yellow rotate-[-4deg]">值</div> {/* value */}
        
        {/* More characters to further fill spaces */}
        <div className="absolute top-[52%] left-[45%] text-4xl font-bold text-biaoQing-yellow rotate-[13deg]">祥</div> {/* auspicious */}
        <div className="absolute top-[76%] right-[45%] text-4xl font-bold text-biaoQing-yellow -rotate-[23deg]">瑞</div> {/* lucky */}
        <div className="absolute top-[34%] left-[84%] text-5xl font-bold text-biaoQing-yellow rotate-[7deg]">胜</div> {/* victory */}
        <div className="absolute top-[84%] left-[34%] text-5xl font-bold text-biaoQing-yellow -rotate-[11deg]">利</div> {/* profit */}
        <div className="absolute top-[22%] right-[82%] text-4xl font-bold text-biaoQing-yellow rotate-[24deg]">好</div> {/* good */}
        <div className="absolute top-[78%] right-[82%] text-4xl font-bold text-biaoQing-yellow rotate-[-9deg]">风</div> {/* wind */}
        <div className="absolute top-[62%] left-[82%] text-5xl font-bold text-biaoQing-yellow rotate-[18deg]">顺</div> {/* smooth */}
        <div className="absolute top-[14%] left-[52%] text-5xl font-bold text-biaoQing-yellow rotate-[-14deg]">发</div> {/* prosper */}
        <div className="absolute top-[84%] right-[21%] text-4xl font-bold text-biaoQing-yellow rotate-[6deg]">财</div> {/* wealth */}
        <div className="absolute top-[32%] right-[72%] text-4xl font-bold text-biaoQing-yellow rotate-[-12deg]">华</div> {/* splendid */}
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-biaoQing-yellow font-heading">HOW TO BUY</h2>
          <p className="text-white/70 text-lg">如何购买</p>
        </div>

        <div className="grid grid-cols-1 gap-10 max-w-4xl mx-auto">
          <Step
            number={1}
            title="Create a Wallet"
            description="Download MetaMask or your wallet of choice from the app store or Google Play Store for free. Desktop users can download the Google Chrome extension by going to metamask.io."
            icon={walletIcon}
            iconAlt="Create Wallet Icon"
          />

          <Step
            number={2}
            title="Get Some BNB"
            description="Have BNB in your wallet to swap for $POPO. If you don't have any BNB, you can buy directly on MetaMask, transfer from another wallet, or buy on an exchange and send it to your wallet."
            icon={bnbIcon}
            iconAlt="Get BNB Icon"
          />

          <Step
            number={3}
            title="Go to PancakeSwap"
            description="Open PancakeSwap app. Connect your wallet, paste the $POPO token address into PancakeSwap, select PopoQing, and confirm. Sign the wallet signature when prompted."
            icon={pancakeSwapIcon}
            iconAlt="PancakeSwap Icon"
          />

          <Step
            number={4}
            title="Swap BNB for $POPO"
            description="Exchange your BNB for $POPO. Our token has zero taxes, so you don't need to worry about specific slippage settings, though you may need to adjust slippage during times of market volatility."
            icon={swapIcon}
            iconAlt="Swap Icon"
          />
        </div>

        <div className="mt-12 text-center">
          <div className="bg-[#111]/80 backdrop-blur-sm p-6 rounded-xl inline-block max-w-md border border-[#333]">
            <p className="text-biaoQing-yellow font-bold mb-3">Token Address:</p>
            <div className="relative">
              <p className="text-white/80 break-all text-sm font-mono bg-[#1A1A1A] p-3 rounded">{tokenAddress}</p>
              <button 
                onClick={copyToClipboard}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-biaoQing-yellow/80 hover:bg-biaoQing-yellow text-biaoQing-black font-bold py-1 px-3 rounded text-xs transition-colors"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
