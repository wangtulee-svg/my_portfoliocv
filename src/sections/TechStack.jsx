import React from 'react'
import TitleHeader from '../components/TitleHeader.jsx'
import { techStackIcons, techStackImgs } from '../constants/index.js'
import TechIcon from '../components/Models/TechLogos/TechIcon.jsx'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

// Define percentages for each skill (your exact values)
const skillPercentages = {
  "React.js": 70,
  "Python": 60,
  "Node.js": 30,
  "C#": 60,
  "Git": 40,
  "Typescript": 50,
  "JavaScript": 66,
  "Three.js": 30,
  "HTML5": 80,
  "CSS3": 65,
  "Tailwind CSS": 70,
  "MongoDB": 70,
  "Flutter": 30,
  "AI": 85,
  "MySQL": 70
}

// Define animation types for each skill
const animationTypes = {
  "React.js": "full",
  "Python": "half",
  "Node.js": "small",
  "C#": "raucaum",
  "Git": "plaubcaug",
  "Typescript": "tsibcaug",
  "JavaScript": "half",
  "Three.js": "small",
  "HTML5": "yimcaum",
  "CSS3": "xyacaum",
  "Tailwind CSS": "xyacaum",
  "MongoDB": "full",
  "Flutter": "small",
  "AI": "cuajcaum",
  "MySQL": "xyacaum"
}

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#skills',
        start: 'top center'
      }
    })
  })

  // Get animation class based on skill name
  const getAnimationClass = (name) => {
    const type = animationTypes[name] || "full";
    switch(type) {
      case "full":
        return "tech-card-animated-bg-full";
      case "half":
        return "tech-card-animated-bg-half";
      case "small":
        return "tech-card-animated-bg-small";
      case "plaubcaug":
        return "tech-card-animated-bg-plaubcaug";
      case "raucaum":
        return "tech-card-animated-bg-raucaum";
      case "tsibcaug":
        return "tech-card-animated-bg-tsibcaug";
      case "xyacaum":
        return "tech-card-animated-bg-xyacaum"
      case "yimcaum":
        return "tech-card-animated-bg-yimcaum";
      case "cuajcaum":
        return "tech-carf-animated-bg-cuajcaum";
      case "tiny":
        return "tech-card-animated-bg-tiny";
      default:
        return "tech-card-animated-bg-full";
    }
  }

  // Get percentage for skill
  const getPercentage = (name) => {
    return skillPercentages[name] || 50;
  }

  return (
    <div id='skills' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader 
        title="Skills"
        sub="🤝 My Skills"
        />

        <div className='tech-grid'>
           {techStackIcons.map((icon) => (
            <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
                <div className={getAnimationClass(icon.name)} />
                <div className='tech-card-content'>
                    {/* Percentage display - ABOVE the logo */}
                    <div className='w-full text-center mb-2'>
                      <p className='text-md text-white-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        {getPercentage(icon.name)}% 
                      </p>
                    </div>
                    
                    <div className='tech-icon-wrapper'>
                       <TechIcon model={icon} />
                    </div>

                    <div className='padding-x w-full'>
                        <p>{icon.name}</p>
                    </div>
                </div>
            </div>
           ))}
           

           {techStackImgs.map((icon) => (
            <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
               <div className={getAnimationClass(icon.name)} />
               <div className='tech-card-content'>
                {/* Percentage display - ABOVE the logo */}
                <div className='w-full text-center mb-2'>
                  <p className='text-md text-white-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    {getPercentage(icon.name)}%
                  </p>
                </div>
                
                <div className='tech-icon-wrapper'>
                    <img src={icon.imgPath} />
                </div>
                <div className='padding-x w-full'>
                  <p>{icon.name}</p>
                </div>
               </div>
            </div>
           ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack