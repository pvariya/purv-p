import { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Server } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate MERN Stack Developer with expertise in building full-stack web applications. 
              I recently completed a comprehensive Full Stack Web Development course at Red and White Multimedia Education 
              and am eager to apply my skills to create innovative and efficient web solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With a strong foundation in both front-end and back-end technologies, I enjoy tackling complex problems and 
              transforming ideas into functional, user-friendly applications. My goal is to create web experiences that are 
              not only visually appealing but also performant and accessible to all users.
            </p>
          </div>
          
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 shadow-sm hover:shadow-md">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <Globe size={36} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Front-End Development</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Creating responsive and interactive user interfaces using React.js, Redux Toolkit, and modern CSS frameworks like Tailwind CSS and Bootstrap.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 shadow-sm hover:shadow-md">
              <div className="text-teal-600 dark:text-teal-400 mb-4">
                <Server size={36} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Back-End Development</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Building robust server-side applications with Node.js, Express.js, and implementing secure authentication with JWT and bcrypt.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 shadow-sm hover:shadow-md">
              <div className="text-orange-600 dark:text-orange-400 mb-4">
                <Database size={36} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Database Management</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Designing and optimizing database schemas with MongoDB, and experience with SQL databases like MySQL and PostgreSQL.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 shadow-sm hover:shadow-md">
              <div className="text-purple-600 dark:text-purple-400 mb-4">
                <Code size={36} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Full-Stack Integration</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Seamlessly connecting front-end and back-end components to create cohesive, feature-rich applications with optimal performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;