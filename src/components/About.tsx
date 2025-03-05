import React from 'react';
import { Rocket, Users, Shield, ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Vision Behind <span className="text-primary-600">AlgoRhythm</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              AlgoRhythm was born from a simple question: What if we could hear blockchain activity instead of just seeing it? Our team of musicians, developers, and blockchain enthusiasts came together to create a new way to experience Solana.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              With our $RHYTHM token at the center, we're building a community of people who appreciate both the technological innovation of blockchain and the emotional power of music.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-primary-600" />
                </div>
                <p className="font-medium text-gray-800">
                  Launched in 2023 on Solana
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
                  <Users className="h-5 w-5 text-secondary-600" />
                </div>
                <p className="font-medium text-gray-800">
                  Growing community of 50,000+ users
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-accent-600" />
                </div>
                <p className="font-medium text-gray-800">
                  Audited smart contracts and open-source code
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Music studio with sound equipment" 
                className="w-full h-64 object-cover object-center" 
              />
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Meet Our Team</h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                      alt="Team member" 
                      className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                    />
                    <p className="font-medium text-gray-800 text-sm">Sarah Chen</p>
                    <p className="text-xs text-gray-500">Founder & CEO</p>
                  </div>
                  
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                      alt="Team member" 
                      className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                    />
                    <p className="font-medium text-gray-800 text-sm">Alex Rivera</p>
                    <p className="text-xs text-gray-500">CTO</p>
                  </div>
                  
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                      alt="Team member" 
                      className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                    />
                    <p className="font-medium text-gray-800 text-sm">Maya Johnson</p>
                    <p className="text-xs text-gray-500">Lead Developer</p>
                  </div>
                </div>
                
                <a 
                  href="#team" 
                  className="flex items-center justify-center px-4 py-2 rounded-lg bg-primary-50 text-primary-600 font-medium hover:bg-primary-100 transition-colors"
                >
                  View Full Team
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-6 right-6 w-64 h-64 bg-gradient-to-br from-accent-300 to-accent-400 rounded-full opacity-10 -z-10"></div>
            <div className="absolute bottom-6 left-6 w-48 h-48 bg-gradient-to-br from-primary-300 to-primary-400 rounded-full opacity-10 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
