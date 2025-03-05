import React from 'react';
import { Music, Waveform, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-primary-50 pt-20 pb-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-accent-300 filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-secondary-300 filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-1/4 w-32 h-32 rounded-full bg-primary-300 filter blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/80 backdrop-blur shadow-sm border border-primary-200">
              <span className="text-sm font-medium text-primary-700">
                Transforming Blockchain into Music
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500">
              Experience Solana <br />
              <span className="text-gray-800">Through Sound</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              AlgoRhythm converts $RHYTHM token activity on Solana into beautiful, 
              real-time music that reflects the heartbeat of the blockchain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#experience" 
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Experience Now
              </a>
              <a 
                href="#learn" 
                className="px-8 py-3 rounded-full bg-white text-primary-600 font-semibold shadow-md border border-primary-200 hover:shadow-lg transition-all hover:border-primary-300"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main circular visualization */}
              <div className="w-full aspect-square rounded-full bg-gradient-to-br from-white to-primary-50 shadow-xl border-4 border-white p-8 flex items-center justify-center relative overflow-hidden animate-float">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-full z-0"></div>
                
                {/* Center icon */}
                <div className="relative z-10 bg-white rounded-full p-6 shadow-lg">
                  <Music className="h-14 w-14 text-primary-600" />
                </div>
                
                {/* Animated wave circles */}
                <div className="absolute inset-0 rounded-full">
                  <div className="w-full h-full rounded-full border-4 border-primary-200 animate-pulse-slow"></div>
                </div>
                <div className="absolute inset-0 scale-75 rounded-full">
                  <div className="w-full h-full rounded-full border-4 border-secondary-200 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                </div>
                <div className="absolute inset-0 scale-50 rounded-full">
                  <div className="w-full h-full rounded-full border-4 border-accent-200 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute top-6 right-10 bg-white rounded-full p-3 shadow-md animate-bounce-slow">
                  <Waveform className="h-6 w-6 text-secondary-500" />
                </div>
                <div className="absolute bottom-10 left-6 bg-white rounded-full p-3 shadow-md animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                  <BarChart3 className="h-6 w-6 text-accent-500" />
                </div>
                
                {/* Token symbol */}
                <div className="absolute bottom-4 right-1/4 bg-gradient-to-r from-solanaPurple to-solana text-white font-bold rounded-full px-3 py-1 text-sm shadow-lg">
                  $RHYTHM
                </div>
              </div>

              {/* Background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400/20 via-secondary-400/20 to-accent-400/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
