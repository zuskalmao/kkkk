import React from 'react';
import { Zap, Users, Music } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="connect" className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Experience the Sound of Solana?
              </h2>
              
              <p className="text-xl text-white/90 mb-8">
                Connect your wallet and join thousands of users already enjoying the symphony of blockchain.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#" 
                  className="px-8 py-3 rounded-full bg-white text-primary-600 font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  Connect Wallet
                </a>
                <a 
                  href="#" 
                  className="px-8 py-3 rounded-full bg-transparent text-white border border-white font-semibold hover:bg-white/10 transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Join Now?</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Early Adopter Benefits</h4>
                    <p className="text-white/80">
                      Early users receive exclusive access to premium features and potential airdrops.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Growing Community</h4>
                    <p className="text-white/80">
                      Join over 50,000 music and blockchain enthusiasts already part of our ecosystem.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <Music className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Unique Experience</h4>
                    <p className="text-white/80">
                      Experience blockchain like never before through the universal language of music.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full sm:w-auto sm:min-w-[180px]">
              <span className="text-3xl font-bold mb-2">50,000+</span>
              <span className="text-white/80">Active Users</span>
            </div>
            
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full sm:w-auto sm:min-w-[180px]">
              <span className="text-3xl font-bold mb-2">3.5M+</span>
              <span className="text-white/80">Transactions</span>
            </div>
            
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full sm:w-auto sm:min-w-[180px]">
              <span className="text-3xl font-bold mb-2">125,000+</span>
              <span className="text-white/80">Hours of Music</span>
            </div>
            
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full sm:w-auto sm:min-w-[180px]">
              <span className="text-3xl font-bold mb-2">15+</span>
              <span className="text-white/80">Partners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
