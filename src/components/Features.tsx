import React from 'react';
import { Music, LineChart, Code, Zap, RefreshCw, Coins } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Music className="h-8 w-8 text-primary-600" />,
      title: "Blockchain Sonification",
      description: "Experience real-time conversion of $RHYTHM token transactions into musical elements with unique tones for different activities.",
      gradient: "from-primary-500 to-primary-700"
    },
    {
      icon: <LineChart className="h-8 w-8 text-secondary-600" />,
      title: "Visual Patterns",
      description: "See beautiful visualizations that sync perfectly with the generated music, creating a multi-sensory blockchain experience.",
      gradient: "from-secondary-500 to-secondary-700"
    },
    {
      icon: <Code className="h-8 w-8 text-accent-600" />,
      title: "Open Protocol",
      description: "Built on Solana for lightning-fast, low-cost transactions that enable seamless musical experiences.",
      gradient: "from-accent-500 to-accent-700"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      title: "Low Latency",
      description: "Hear blockchain activity in near real-time with our optimized processing engine that minimizes delay.",
      gradient: "from-primary-500 to-primary-700"
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-secondary-600" />,
      title: "Continuous Generation",
      description: "Music never stops as long as there's blockchain activity, creating an ever-evolving soundtrack.",
      gradient: "from-secondary-500 to-secondary-700"
    },
    {
      icon: <Coins className="h-8 w-8 text-accent-600" />,
      title: "$RHYTHM Token",
      description: "Our native token powers the ecosystem and gives holders exclusive access to premium features and governance.",
      gradient: "from-accent-500 to-accent-700"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Features that <span className="text-primary-600">Harmonize</span> Blockchain
          </h2>
          <p className="text-lg text-gray-600">
            AlgoRhythm transforms cold blockchain data into warm, responsive musical experiences that anyone can enjoy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="p-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg mb-4 bg-gradient-to-r ${feature.gradient} text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
