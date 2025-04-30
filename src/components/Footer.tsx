import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#" 
              className="text-xl font-bold"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="text-blue-600 dark:text-blue-400">Purv</span>
              <span className="text-gray-800 dark:text-white">Variya</span>
            </a>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {currentYear} Built with <Heart size={16} className="inline-block text-red-500 mx-1" /> by Purv Variya
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a 
              href="https://github.com/pvariya" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 00-3.16 19.5c.5.08.66-.22.66-.48v-1.7c-2.73.6-3.3-1.32-3.3-1.32-.45-1.13-1.08-1.43-1.08-1.43-.9-.6.07-.6.07-.6.98.07 1.5 1 1.5 1 .87 1.52 2.3 1.07 2.86.82.09-.65.35-1.07.63-1.32-2.2-.25-4.5-1.1-4.5-4.9 0-1.07.38-1.95 1-2.64-.1-.25-.43-1.25.1-2.6 0 0 .83-.27 2.7 1a9.4 9.4 0 015 0c1.87-1.27 2.7-1 2.7-1 .53 1.35.2 2.35.1 2.6.62.7 1 1.57 1 2.64 0 3.82-2.3 4.66-4.5 4.9.36.31.67.91.67 1.85v2.74c0 .26.16.57.67.48A10 10 0 0012 2z"></path>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/variya_purv" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;