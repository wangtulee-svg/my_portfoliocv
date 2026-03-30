// import AnimatedCounter from '../components/AnimatedCounter.jsx';
import Button from '../components/Button.jsx'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'
import { words } from '../constants/index.js'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.hero-text h1', 
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.inOut'
      },
    )
  })

  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
          <img src="/images/bg.png" alt="background" />
        </div>

        <div className='hero-layout'>
            {/*LEFT: HERO CONTENT*/}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
               <div className='flex flex-col gap-7'>
                  {/* ABOUT ME ADDED ON TOP */}
                  <div className='mb-2'>
                    <h2 className='text-2xl md:text-3xl font-semibold text-[#d9ecff]'>About Me</h2>
                  </div>
                  
                  {/* IMAGE BOX - SHOWS ON MOBILE ONLY */}
                  <div className='block md:hidden w-full mb-6'>
                    <div className='bg-gradient-to-br from-[#d9ecff]/10 to-[#1c1c21]/20 rounded-2xl p-4 border border-[#d9ecff]/30 shadow-xl'>
                      <div className='relative w-full aspect-square max-w-[280px] mx-auto rounded-xl overflow-hidden'>
                        <img 
                          src="/images/ImageResp.jpeg" 
                          alt="Profile" 
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div className='text-center mt-4'>
                        <p className='text-gray-300 text-sm'> I enjoy building real-world projects, creating user-friendly interfaces, coding, and learning new tools.</p>
                        <p className='text-[#d9ecff] text-xs mt-1'> I am passionate about music, exercise, and traveling, and I enjoy talking and connecting with people.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className='hero-text'>
                    <h1>
                        I'm a
                        <span className='slide'>
                            <span className='wrapper'>
                               {words.map((word, index) => (
                                <span key={index} className='flex items-center md:gap-3 gap-1 pb-2'>
                                    <img 
                                        src={word.imgPath}
                                        alt={word.text}
                                        className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                                    />

                                    <span>{word.text}</span>
                                </span>
                               ))}
                            </span>
                        </span>
                    </h1>
                    
                    <h1> Science student </h1>
                    <h1></h1>    
                  </div>  
                  
                  {/* TEXT - HIDDEN ON MOBILE, VISIBLE ON DESKTOP */}
                  <p className='hidden md:block text-white-50 md:text-xl relative z-10 pointer-events-none'>
                      I enjoy building real-world projects, creating<br /> user-friendly interfaces, learning new tools,<br />coding, and connecting with people.<br />
                      I am passionate about music, exercise, and traveling. <br />
                  </p>
                  
                  <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="View My Skills"/>
               </div>
            </header>

            {/*RIGHT: 3D MODEL - HIDDEN ON MOBILE */}
            <figure className="hidden md:block">
              <div className='hero-3d-layout'>
                 <HeroExperience />
              </div>
            </figure>
        </div>
    </section>
  )
}

export default Hero