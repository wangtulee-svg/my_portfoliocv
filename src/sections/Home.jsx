import React, { useEffect, useState } from 'react';
import FinisherBackground from '../components/FinisherBackground';
import BlinkingEye from '../components/BlinkingEye';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Finisher Background Animation */}
      <FinisherBackground />
      
      {/* ສ່ວນຂໍ້ຄວາມ ແລະ ຮູບ */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-10 py-20">
        {/* ປັບ grid: ໃນ mobile ຮູບຢູ່ເທິງ, desktop ຢູ່ຂ້າງກັນ */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* ສ່ວນຂໍ້ຄວາມທາງຊ້າຍ (ຈະຢູ່ລຸ່ມໃນ mobile) */}
          <div className={`w-full transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="mb-4">
              <span className="text-[#d9ecff] text-xl font-mono">Hello, I'm</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
              Kaoleevang<br />MAIVANG
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#d9ecff] mb-6">
              Computer Science Student
            </h2>
            
            <div className="w-20 h-1 bg-[#d9ecff] mb-6 rounded-full"></div>
            
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              I build web applications and explore new technologies, and have an interest in data science.
            </p>
            
            {/* ປຸ່ມ CV ແລະ Social Links */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* View CV Button with Blinking Eye */}
              <a 
  href="./cv.html" 
  target="_blank"
  rel="noopener noreferrer"
  onMouseEnter={() => setIsButtonHovered(true)}
  onMouseLeave={() => setIsButtonHovered(false)}
  className="inline-flex items-center gap-2 bg-[#d9ecff] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-black hover:bg-[#1c1c21] hover:text-[#d9ecff] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
>
  <BlinkingEye isParentHovered={isButtonHovered} />
  View on CV
</a>
              
              {/* GitHub Link */}
              <a 
                href="https://github.com/wangtulee-svg" 
                className="group relative inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-[#d9ecff] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="text-gray-800 dark:text-white group-hover:text-black transition-colors duration-300 sm:w-6 sm:h-6"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              {/* LinkedIn Link */}
              <a 
                href="#" 
                className="group relative inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-[#d9ecff] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="text-gray-800 dark:text-white group-hover:text-black transition-colors duration-300 sm:w-6 sm:h-6"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
                </svg>
              </a>
              
              {/* Facebook Link */}
              <a 
                href="https://www.facebook.com/share/1BTqwBUhC2/" 
                className="group relative inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-[#d9ecff] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="text-gray-800 dark:text-white group-hover:text-black transition-colors duration-300 sm:w-6 sm:h-6"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              
              {/* Email Link */}
              <a 
                href="#" 
                className="group relative inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-[#d9ecff] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                aria-label="Email"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-gray-800 dark:text-white group-hover:text-black transition-colors duration-300 sm:w-6 sm:h-6"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* ສ່ວນຮູບໂປຣໄຟລ໌ - ຈະຢູ່ເທິງໃນ mobile */}
          <div className={`w-full flex justify-center items-center transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative inline-block">
              <div className="relative">
                <img 
                  src="./images/Myhome_img.png" 
                  alt="Mr. Kaoleevang Maivang" 
                  className="max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] w-full h-auto object-contain drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 20px 25px -12px rgba(0, 0, 0, 0.25))' }}
                />
                
                {/* Gradient fade-out ດ້ານລຸ່ມ */}
                <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-36 md:h-40 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent rounded-b-3xl pointer-events-none"></div>
                
                {/* ເສັ້ນແສງອ່ອນໆ ດ້ານລຸ່ມ */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 md:w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#d9ecff]/50 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;