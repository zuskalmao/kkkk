import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const Roadmap: React.FC = () => {
  const milestones = [
    {
      quarter: 'Q3 2023',
      title: 'Project Launch',
      description: 'Initial concept development and team formation. Smart contract deployment and $RHYTHM token launch on Solana.',
      items: [
        { text: 'Launch $RHYTHM token', completed: true },
        { text: 'Deploy initial smart contracts', completed: true },
        { text: 'Basic sonification engine', completed: true },
        { text: 'Community building', completed: true }
      ],
      completed: true
    },
    {
      quarter: 'Q4 2023',
      title: 'Core Experience',
      description: 'Development of core visualization and sonification technology. Beta launch of the web application.',
      items: [
        { text: 'Web application beta', completed: true },
        { text: 'Advanced algorithm integration', completed: true },
        { text: 'Real-time transaction monitoring', completed: true },
        { text: 'Visual effects implementation', completed: true }
      ],
      completed: true
    },
    {
      quarter: 'Q1 2024',
      title: 'Ecosystem Growth',
      description: 'Expansion of features and community engagement. Partnership development with Solana projects.',
      items: [
        { text: 'Multi-token support', completed: true },
        { text: 'Customizable sound profiles', completed: true },
        { text: 'Partnership integrations', completed: true },
        { text: 'Mobile app development', completed: false }
      ],
      completed: false,
      current: true
    },
    {
      quarter: 'Q2 2024',
      title: 'Feature Enhancement',
      description: 'Advanced features rollout and technological improvements. Expansion of the $RHYTHM token utility.',
      items: [
        { text: 'AI-generated compositions', completed: false },
        { text: 'NFT audio collectibles', completed: false },
        { text: 'Governance mechanisms', completed: false },
        { text: 'Developer API', completed: false }
      ],
      completed: false
    },
    {
      quarter: 'Q3-Q4 2024',
      title: 'Global Expansion',
      description: 'Scaling the platform for global adoption. Building advanced integration with the entire Solana ecosystem.',
      items: [
        { text: 'Multi-chain support', completed: false },
        { text: 'VR/AR experiences', completed: false },
        { text: 'Live events and performances', completed: false },
        { text: 'Institutional partnerships', completed: false }
      ],
      completed: false
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-primary-600">Roadmap</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The journey of AlgoRhythm is just beginning. Here's our plan for bringing
            blockchain music to the world.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} md:w-5/12`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-0 top-0 md:translate-x-1/2 -translate-y-1/2 md:-translate-x-1/2 z-10 hidden md:block">
                  {milestone.completed ? (
                    <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                  ) : milestone.current ? (
                    <div className="w-8 h-8 rounded-full bg-accent-500 text-white flex items-center justify-center animate-pulse">
                      <Circle className="h-6 w-6" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center">
                      <Circle className="h-6 w-6" />
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${
                  milestone.completed 
                    ? 'border-primary-500' 
                    : milestone.current 
                      ? 'border-accent-500' 
                      : 'border-gray-300'
                }`}>
                  <div className="flex items-center mb-3">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      milestone.completed 
                        ? 'bg-primary-100 text-primary-700' 
                        : milestone.current 
                          ? 'bg-accent-100 text-accent-700' 
                          : 'bg-gray-100 text-gray-700'
                    }`}>
                      {milestone.quarter}
                    </div>
                    {milestone.current && (
                      <div className="ml-2 px-2 py-1 bg-accent-100 text-accent-700 text-xs font-medium rounded-full">
                        Current
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 mb-4">{milestone.description}</p>
                  
                  <ul className="space-y-2">
                    {milestone.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className={`flex-shrink-0 mr-2 mt-1 ${
                          item.completed ? 'text-primary-500' : 'text-gray-400'
                        }`}>
                          {item.completed ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <Circle className="h-4 w-4" />
                          )}
                        </span>
                        <span className={item.completed ? 'text-gray-800' : 'text-gray-500'}>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
