import { Github as GitHub, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center relative overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full filter blur-3xl z-0"
        style={{ 
          animation: 'float 15s ease-in-out infinite alternate', 
        }}
      />
      <div 
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-500/10 dark:bg-teal-500/5 rounded-full filter blur-3xl z-0"
        style={{ 
          animation: 'float 18s ease-in-out infinite alternate-reverse',
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Hero Content */}
          <div 
            className={`w-full lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span className="text-blue-600 dark:text-blue-400 font-medium mb-2 block">
              Hello, I'm
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Purv Variya
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              MERN Stack Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              Passionate about creating robust, user-friendly web applications using modern technologies. Specialized in building full-stack solutions with React, Node.js, and MongoDB.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 font-medium flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-full transition-colors duration-300 font-medium"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <a href="https://github.com/pvariya" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <GitHub size={22} />
              </a>
              <a href="https://linkedin.com/in/variya_purv" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <Linkedin size={22} />
              </a>
              <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <Mail size={18} />
                <a href="mailto:variyapurv@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  variyapurv@gmail.com
                </a>
              </span>
              <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <Phone size={18} />
                <a href="tel:+919104870758" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  +91 9104870758
                </a>
              </span>
              <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <MapPin size={18} />
                Surat, India
              </span>
            </div>
          </div>
          
          {/* Hero Image */}
          <div 
            className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto overflow-hidden rounded-full border-4 border-blue-600/20 dark:border-blue-400/20">
                <img 
                  src="https://i.postimg.cc/MGzPWLKy/p-2-1.jpg" // Replace with your Imgur image URL
                  alt="Purv Variya"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute top-0 -right-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg p-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for work</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg p-3 animate-float-delay">
                <div className="flex items-center gap-2">
                  <div className="text-blue-600 dark:text-blue-400">
                    <div className="relative">
                      <span className="text-sm font-medium">MERN</span>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600/20 dark:bg-blue-400/20"></div>
                    </div>
                  </div>
                  <div className="text-teal-600 dark:text-teal-400">
                    <div className="relative">
                      <span className="text-sm font-medium">Stack</span>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-600/20 dark:bg-teal-400/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          75% { transform: translateY(4px); opacity: 0; }
          80% { transform: translateY(0); opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 4s ease-in-out 2s infinite;
        }
        
        .animate-scroll {
          animation: scroll 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;