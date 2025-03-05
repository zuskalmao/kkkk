import React, { useEffect, useRef, useState } from 'react';

const MusicVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Variables for the visualization
    let animationId: number;
    const particles: Particle[] = [];
    const particleCount = 60;
    const colors = [
      '#8b5cf6', // primary-500
      '#14b8a6', // secondary-500
      '#f97316', // accent-500
      '#9945FF', // solanaPurple
      '#14F195', // solana
    ];

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      amplitude: number;
      frequency: number;
      phase: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 2;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.amplitude = Math.random() * 20 + 5;
        this.frequency = Math.random() * 0.05 + 0.01;
        this.phase = Math.random() * Math.PI * 2;
      }

      update(time: number) {
        // Wave motion
        const originalY = this.y;
        this.y = originalY + Math.sin(time * this.frequency + this.phase) * this.amplitude;
        
        // Boundary check
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (originalY > canvas.height || originalY < 0) {
          this.speedY = -this.speedY;
        }
        
        // Movement (reduced when not playing)
        this.x += this.speedX * (isPlaying ? 1 : 0.2);
        
        // Reset position if out of bounds
        if (this.x > canvas.width + 100) this.x = -100;
        if (this.x < -100) this.x = canvas.width + 100;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections between close particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 100)})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update(timestamp * 0.001);
        particle.draw(ctx);
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, [isPlaying]);

  return (
    <section id="visualizer" className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Experience the <span className="text-primary-600">Symphony</span> of Solana
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our visualizer translates blockchain transactions into beautiful sounds and visuals,
            creating a unique sensory experience of $RHYTHM token activity.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mx-auto max-w-4xl">
          <div className="p-6 bg-gradient-to-r from-primary-600 to-secondary-500 text-white flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl">AlgoRhythm Visualizer</h3>
              <p className="text-white/80 text-sm">Powered by $RHYTHM token</p>
            </div>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-5 py-2 rounded-full font-medium text-sm focus:outline-none transition-colors ${
                isPlaying 
                  ? 'bg-white text-primary-600 hover:bg-gray-100' 
                  : 'bg-primary-700 text-white hover:bg-primary-800'
              }`}
            >
              {isPlaying ? 'Pause Experience' : 'Start Experience'}
            </button>
          </div>
          
          <div className="relative bg-black" style={{ height: '400px' }}>
            <canvas 
              ref={canvasRef} 
              className="absolute inset-0 w-full h-full"
            ></canvas>
            
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="text-center">
                  <p className="text-white text-xl font-medium mb-4">Click Start to Experience the Music</p>
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white font-medium hover:from-primary-600 hover:to-secondary-600 transition-all transform hover:scale-105"
                  >
                    Start Experience
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-6 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <div className="text-sm text-gray-500 mb-1">Current Transaction Rate</div>
                <div className="text-2xl font-bold text-gray-800">
                  {isPlaying ? '1,542 TPS' : '-- TPS'} 
                  <span className="text-sm text-primary-500 ml-2">
                    {isPlaying ? '↑ 12%' : ''}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-sm text-gray-500">Tempo</div>
                  <div className="font-medium text-gray-800">{isPlaying ? '120 BPM' : '--'}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">Key</div>
                  <div className="font-medium text-gray-800">{isPlaying ? 'C Major' : '--'}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">Mood</div>
                  <div className="font-medium text-gray-800">{isPlaying ? 'Upbeat' : '--'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicVisualizer;
