import React from 'react';
import { Activity, Disc, Headphones, ArrowRightCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="learn" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How AlgoRhythm <span className="text-primary-600">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From blockchain activity to beautiful melodies, our technology translates 
            the pulse of Solana into an immersive audio experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 transform -translate-y-1/2 hidden md:block"></div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 h-full border border-gray-100 hover:border-primary-200 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">Blockchain Data</h3>
                
                <p className="text-gray-600 text-center">
                  AlgoRhythm captures $RHYTHM token transactions and activity on the Solana blockchain in real-time.
                </p>
                
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 text-primary-500">
                  <ArrowRightCircle className="h-8 w-8" />
                </div>
              </div>
              
              <div className="md:hidden flex justify-center mt-4">
                <ArrowRightCircle className="h-8 w-8 rotate-90 text-primary-500" />
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 h-full border border-gray-100 hover:border-secondary-200 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary-100 flex items-center justify-center">
                  <Disc className="h-8 w-8 text-secondary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">Sonification Engine</h3>
                
                <p className="text-gray-600 text-center">
                  Our proprietary algorithm converts transaction data into musical elements like notes, rhythm, and harmony.
                </p>
                
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 text-secondary-500">
                  <ArrowRightCircle className="h-8 w-8" />
                </div>
              </div>
              
              <div className="md:hidden flex justify-center mt-4">
                <ArrowRightCircle className="h-8 w-8 rotate-90 text-secondary-500" />
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 h-full border border-gray-100 hover:border-accent-200 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-100 flex items-center justify-center">
                  <Headphones className="h-8 w-8 text-accent-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">Musical Experience</h3>
                
                <p className="text-gray-600 text-center">
                  Users experience a continuous stream of music that reflects the current state and activity of the blockchain.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Breakdown</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                <span className="font-bold text-primary-600">1</span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800">Data Collection</h4>
                <p className="text-gray-600">
                  We monitor the Solana blockchain for all $RHYTHM token transactions and contract interactions through secure RPC nodes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center mr-4">
                <span className="font-bold text-secondary-600">2</span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800">Musical Mapping</h4>
                <p className="text-gray-600">
                  Different transaction types are assigned to musical parameters: transaction size controls volume, sender/receiver addresses influence pitch, and gas fees affect tempo.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center mr-4">
                <span className="font-bold text-accent-600">3</span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800">Audio Synthesis</h4>
                <p className="text-gray-600">
                  Our Web Audio API-powered engine generates high-quality sound in real-time while maintaining musical coherence and aesthetic appeal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
