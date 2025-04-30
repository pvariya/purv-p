import { useState, useEffect, useRef } from 'react';
import { BookOpen, Award } from 'lucide-react';

interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

const educationData: Education[] = [
  {
    id: 1,
    institution: "K. & M. P. Patel High School",
    degree: "H.S.C. Board",
    period: "2016 - 2018",
    description: "Completed higher secondary education with a focus on science and mathematics, building a strong foundation for further studies in technology."
  }
];

const certificatesData: Certificate[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Red and White Multimedia Education",
    date: "2023",
    description: "Comprehensive training in modern web development technologies including MERN stack (MongoDB, Express.js, React.js, Node.js), responsive design principles, and industry-standard practices."
  }
];

const Education = () => {
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
      id="education" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <BookOpen size={24} className="text-blue-600 dark:text-blue-400 mr-2" />
              Education
            </h3>
            
            <div className="relative border-l-2 border-blue-600 dark:border-blue-400 pl-8 pb-8">
              {educationData.map((item, index) => (
                <div 
                  key={item.id}
                  className={`mb-8 relative transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute -left-10 mt-1.5 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-800"></div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{item.institution}</h4>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{item.period}</span>
                    </div>
                    <div className="text-gray-700 dark:text-gray-300 font-medium mb-2">{item.degree}</div>
                    {item.description && (
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Award size={24} className="text-blue-600 dark:text-blue-400 mr-2" />
              Certifications
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              {certificatesData.map((item, index) => (
                <div 
                  key={item.id}
                  className={`bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${300 + index * 200}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{item.date}</span>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium mb-2">{item.issuer}</div>
                  {item.description && (
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;