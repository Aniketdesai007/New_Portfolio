import React from 'react'
import {HERO_CONTENT} from '../constants/index.js'
import {motion} from 'framer-motion'
import { Container } from 'postcss'
import img3 from '../assets/img3.jpg'

const container=(delay)=>({
  hidden:{opacity:0,x:-100},
  visible:{opacity:1,x:0,
    transition:{
      delay:delay,
      duration:0.5
    }
  }
})


const Hero = () => {
  return (
    <div id='Hero' className='border-b border-neutral-900 pb-14  lg:mb-35'>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                  <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 variants={container(0)}
                    initial="hidden"
                    animate="visible" className='font-thin tracking-tight text-6xl pb-16 lg:text-8xl lg:mt-16'>
                      Aniket Desai
                    </motion.h1>
                    <motion.span variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className=' bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500  bg-clip-text tracking-tight text-transparent text-3xl'>FULL STACK DEVELOPER</motion.span>
                    <motion.p variants={container(1)}
                    initial="hidden"
                    animate="visible" className='  font-light py-6 max-w-xl my-2'>
                      {HERO_CONTENT}
                      </motion.p>  

                  </div>
            
            </div>
            <motion.div initial={{x:100,opacity:0}}
            animate={{opacity:1,x:0}}
            transition={{duration:0.5 ,delay:1.2}}
            className='felx justify-center mt-20 relative left-[25%] md:left-5  md:w-1/2 md:pl-[4rem]'>
              <img src={img3} alt="img3"  className='rounded-full h-[300px] w-[300px]'/>
            </motion.div>

        </div>
    </div>
  )
}

export default Hero
