import React from 'react';
import { LineChart, TrendingUp, CircleDollarSign, ShieldCheck } from 'lucide-react';

const TokenInfo: React.FC = () => {
  return (
    <section id="token" className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            The <span className="text-primary-600">$RHYTHM</span> Token
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Powering the musical blockchain experience and creating value for our community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-6 bg-gradient-to-r from-primary-600 to-secondary-500 text-white">
                <h3 className="text-xl font-bold mb-2">Token Metrics</h3>
                <p className="text-white/80">Key information about $RHYTHM</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Token Name</span>
                    <span className="font-medium text-gray-800">RHYTHM</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Token Symbol</span>
                    <span className="font-medium text-gray-800">$RHYTHM</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Total Supply</span>
                    <span className="font-medium text-gray-800">100,000,000 RHYTHM</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Blockchain</span>
                    <span className="font-medium text-gray-800">Solana</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Token Type</span>
                    <span className="font-medium text-gray-800">SPL</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Current Price</span>
                    <span className="font-medium text-primary-600">$0.0425 USD</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="#" 
                    className="block w-full py-3 rounded-lg bg-primary-600 text-white font-medium text-center hover:bg-primary-700 transition-colors"
                  >
                    Buy $RHYTHM
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Token Utility</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <CircleDollarSign className="h-5 w-5 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Platform Access</h4>
                  <p className="text-gray-600">
                    $RHYTHM token holders get premium access to advanced musical features, 
                    custom sound profiles, and exclusive visualizations not available to free users.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center mr-4">
                    <TrendingUp className="h-5 w-5 text-secondary-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Staking Rewards</h4>
                  <p className="text-gray-600">
                    Stake your $RHYTHM tokens to earn passive income while helping to secure the network.
                    Higher staking tiers unlock additional platform benefits.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center mr-4">
                    <LineChart className="h-5 w-5 text-accent-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Governance</h4>
                  <p className="text-gray-600">
                    Token holders can vote on platform development, feature prioritization,
                    and other important decisions that shape the future of AlgoRhythm.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <ShieldCheck className="h-5 w-5 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Music NFTs</h4>
                  <p className="text-gray-600">
                    Use $RHYTHM to mint and trade unique musical compositions generated from 
                    specific blockchain transactions, creating a marketplace for digital sound art.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;
