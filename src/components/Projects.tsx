import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink, Github, ShoppingCart, Car } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  icon: React.ReactNode;
  link?: string;
  github?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Clothing Website",
    description: "A full-stack e-commerce platform with secure authentication, product management, and payment integration",
    technologies: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt", "Stripe/PayPal", "Tailwind CSS"],
    features: [
      "JWT-based authentication with bcrypt password hashing",
      "Role-based access control (Admin, Customer)",
      "Redux Toolkit-powered cart system",
      "Integrated Stripe/PayPal payments",
      "Order tracking functionality",
      "Admin dashboard for managing users, orders, and inventory",
      "Responsive UI using React and Tailwind CSS"
    ],
    icon: <ShoppingCart size={32} />,
    github: "https://github.com/pvariya/ecommerce"
  },
  {
    id: 2,
    title: "Uber-like Ride-Hailing Application",
    description: "A full-stack ride-hailing app with real-time ride booking, driver-rider matching, and secure payment integration",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt", "Google Maps API", "Stripe", "Tailwind CSS"],
    features: [
      "JWT-based authentication with bcrypt password hashing",
      "Role-based access control (Driver, Rider, Admin)",
      "Real-time location tracking (Google Maps API)",
      "Stripe payment integration for ride fares",
      "Admin dashboard to manage users, trips, and payments",
      "Responsive UI with React & Tailwind CSS"
    ],
    icon: <Car size={32} />,
    github: "https://github.com/pvariya/uber-clone"
  }
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  
  const openModal = (project: Project) => {
    setActiveProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projectsData.map((project, index) => (
              <div 
                key={project.id}
                className={`bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-600 dark:text-blue-400">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => openModal(project)}
                      className="flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                    >
                      View Details <ArrowRight size={16} className="ml-1" />
                    </button>
                    
                    <div className="flex space-x-3">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                          aria-label="GitHub Repository"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Project Details Modal */}
      {isModalOpen && activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
          <div 
            className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex items-center mb-6">
                <div className="text-blue-600 dark:text-blue-400 mr-3">
                  {activeProject.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{activeProject.title}</h3>
              </div>
              
              <div className="mb-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  {activeProject.description}
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {activeProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-end space-x-4">
                {activeProject.github && (
                  <a 
                    href={activeProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    <Github size={18} className="mr-2" />
                    View Code
                  </a>
                )}
                {activeProject.link && (
                  <a 
                    href={activeProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;