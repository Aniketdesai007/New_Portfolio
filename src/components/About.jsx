import React from 'react'
import {ABOUT_TEXT} from '../constants/index.js'
import {motion} from 'framer-motion'
import img1 from '../assets/img1.jpg'

function About() {
  return (
    <div className='border-b border-neutral-900 mb-8 pb-20 pt-16' id='About'>
      <h2 className=' py-6 flex justify-center text-4xl'>
        About&nbsp;
        <span className='text-neutral-500'>Me</span> 
      </h2>

      <div className='flex flex-wrap justify-center items-center'>
          <motion.div 
          initial={{opacity:0,x:-100}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:1}}
          className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex items-center justify-center'>
              <img 
                src={img1} 
                className='rounded-2xl 
                  h-[250px] w-[250px] 
                  sm:h-[300px] sm:w-[300px] 
                  md:h-[350px] md:w-[350px] 
                  mt-16 mb-12' 
                alt="Profile" />
            </div>
          </motion.div>

          <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            className='w-full lg:w-1/2'>
              <div className="flex justify-center items-center lg:justify-start">
                <p className='max-w-xl py-6 my-4 text-center lg:text-left'>{ABOUT_TEXT}</p>
              </div>
          </motion.div>
      </div>
    </div>
  )
}

export default About
