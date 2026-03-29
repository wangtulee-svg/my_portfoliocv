import React from 'react'
import { logoIconsList } from '../constants/index.js'

const LogoIcon = ({ icon, index }) => {
    return (
        <div className='flex-none flex-center marquee-item'>
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    )
}

const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative'>
        <div className='gradient-edge' />
        <div className='gradient-edge' />

        <div className='marquee h-52'>
            <div className='marquee-box md:gap-12 gap-5'>
               {/* First set - add unique key with prefix */}
               {logoIconsList.map((icon, index) => (
                 <LogoIcon key={`first-${icon.name}-${index}`} icon={icon} index={index} />
               ))}

               {/* Second set - add different prefix to avoid duplicate keys */}
               {logoIconsList.map((icon, index) => (
                 <LogoIcon key={`second-${icon.name}-${index}`} icon={icon} index={index} />
               ))}
            </div>
        </div>
    </div>
  )
}

export default LogoSection