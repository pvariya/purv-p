import { useState, useEffect, useRef } from 'react';

interface Skill {
  category: string;
  skills: { name: string; level: number }[];
}

const skillsData: Skill[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 75 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "C/C++", level: 65 }
    ]
  },
  {
    category: "Front-End",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Redux Toolkit", level: 85 },
      { name: "Next.js", level: 70 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 }
    ]
  },
  {
    category: "Back-End",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "JWT", level: 80 },
      { name: "bcrypt.js", level: 85 }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "Mongoose", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "MySQL", level: 65 },
      { name: "PostgreSQL", level: 60 }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "Thunder Client", level: 80 }
    ]
  }
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Skills Navigation */}
          <div 
            className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {skillsData.map((category, index) => (
              <button
                key={category.category}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>
          
          {/* Skills Content */}
          <div 
            className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillsData[activeTab].skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-teal-500 rounded-full" 
                      style={{ 
                        width: `${skill.level}%`,
                        transition: 'width 1s ease-in-out',
                        transitionDelay: '0.5s'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;