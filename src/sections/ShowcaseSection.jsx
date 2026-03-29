import { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AnimatedCounter from '../components/AnimatedCounter.jsx';
import TitleHeader from '../components/TitleHeader.jsx';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    
    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
    
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
      )
    }, []);

    // Project data with videos and GitHub links
    const projectData = [
      {
        id: 1,
        title: "Chatbot AI",
        description: "Developed an AI-powered chatbot application to simulate real-time conversations with users. Designed and implemented a responsive user interface using React.js. Built backend functionality and managed data storage using JavaScript and MongoDB. Implemented features such as real-time messaging and user interaction handling. Created and maintained the project independently, from design to deployment.",
        media: {
          type: "video",
          src: "/videos/Video_demo.mp4",
          poster: "/images/flutter2.png"
        },
        githubUrl: "https://github.com/wangtulee-svg/HomeChatBot"
      },
      {
        id: 2,
        title: "E-commerce Platform",
        description: "",
        media: {
          type: "video",
          src: "/videos/Video_demo3.mp4",   ///videos/chat-app-demo.mp4
          poster: "/images/project-management.webp"
        },
        githubUrl: "https://github.com/wangtulee-svg/E-commerce-Platform"
      },
      {
        id: 3,
        title: "Chat-App Platform",
        description: "",
        media: {
          type: "video",
          src: "/videos/Video_demo2.mp4",
          poster: "/images/Chat-app_logo.png"
        },
        githubUrl: "https://github.com/wangtulee-svg/Chat-application"
      }
    ];

    const renderMedia = (project) => {
      if (project.media.type === "video") {
        return (
          <video 
            className="w-full h-full object-cover rounded-xl"
            poster={project.media.poster}
            controls
            loop
            muted
            playsInline
          >
            <source src={project.media.src} type="video/mp4" />
            <img src={project.media.poster} alt={project.title} />
          </video>
        );
      }
      return (
        <img 
          src={project.media.src} 
          alt={project.title} 
          className="w-full h-full object-cover rounded-xl"
        />
      );
    };

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
       <div className='w-full'>
         {/* TitleHeader with spacing below */}
         <div className='mb-12'>
           <TitleHeader 
             title="Featured Projects"
             sub="🧰 My Projects"
           />
         </div>
         <AnimatedCounter />
         <div className='mt-12'>
           <div className='showcaselayout'>
             {/* LEFT */}
             <div className='first-project-wrapper' ref={project1Ref}>
               <div className='image-wrapper'>
                  {renderMedia(projectData[0])}
               </div>
               <div className='text-content'>
                  <div className='flex items-center justify-between'>
                    <h2>{projectData[0].title}</h2>
                    <a 
                      href={projectData[0].githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='ml-4 hover:scale-110 transition-transform duration-300'
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="28" 
                        height="28" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="text-white hover:text-[#d9ecff] transition-colors"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className='text-xs text-white'>GitHub Repo</span>
                    </a>
                  </div>
                  <p className='text-white-50 md:text-xl'>
                    {projectData[0].description}
                  </p>
               </div>
             </div>
             {/* RIGHT */}
             <div className='project-list-wrapper overflow-hidden'>
               <div className='project' ref={project2Ref}>
                  <div className='image-wrapper bg-[#ffefdb]'>
                      {renderMedia(projectData[1])}
                  </div>
                  <div className='flex items-center justify-between mt-5'>
                    <h2>{projectData[1].title}</h2>
                    <a 
                      href={projectData[1].githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='ml-4 hover:scale-110 transition-transform duration-300'
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="text-white hover:text-[#d9ecff] transition-colors"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className='text-xs text-white'>GitHub Repo</span>
                    </a>
                  </div>
               </div>

               <div className='project' ref={project3Ref}>
                  <div className='image-wrapper bg-[#ffe7eb]'>
                      {renderMedia(projectData[2])}
                  </div>
                  <div className='flex items-center justify-between mt-5'>
                    <h2>{projectData[2].title}</h2>
                    <a 
                      href={projectData[2].githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='ml-4 hover:scale-110 transition-transform duration-300'
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="text-white hover:text-[#d9ecff] transition-colors"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className='text-xs text-white'>GitHub Repo</span>
                    </a>
                  </div>
               </div>
             </div>
           </div>
         </div>
       </div>
    </section>
  )
}

export default ShowcaseSection