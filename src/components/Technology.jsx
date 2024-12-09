import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {DiRedis} from 'react-icons/di'
import {motion} from 'framer-motion'
import { SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const iconvariant=(duration)=>({
        initial:{y:-10},
        animate:{y:[10,-10],
                transition:{
                          duration:duration,
                repeat: Infinity,
                ease: "linear",
                repeatType:"reverse"
                }
              

        }
})

function Technology() {
  return (
    <div id='Technology' className='border-b border-neutral-800 pb-16 pt-16'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className='text-4xl flex justify-center items-center'>Technology</motion.h2>
        <motion.div initial={{opacity:0, x:-100}} transition={{duration:0.5}}
        whileInView={{opacity:1,x:0}} className='flex flex-wrap justify-center my-12 py-8 gap-4'>
            <motion.div variants={iconvariant(2.5)} initial="initial" animate="animate"
            className=' border-4 rounded-2xl border-neutral-800 p-2'>
<RiReactjsLine className='text-6xl  text-cyan-400 '/>    
        </motion.div>
        <motion.div variants={iconvariant(3)} initial="initial" animate="animate" className=' border-4 rounded-2xl border-neutral-800 p-2'>
<FaNodeJs className='text-6xl  text-green-600 '/>    
        </motion.div>  
           <motion.div variants={iconvariant(3.5)} initial="initial" animate="animate" className=' border-4 rounded-2xl border-neutral-800 p-2'>
<SiMongodb className='text-6xl  text-green-500 '/>    
        </motion.div>     
        <motion.div variants={iconvariant(4)} initial="initial" animate="animate" className=' border-4 rounded-2xl border-neutral-800 p-2'>
<SiTailwindcss className='text-6xl  text-cyan-400 '/>    
        </motion.div>     
        <motion.div variants={iconvariant(4.5)} initial="initial" animate="animate" className=' border-4 rounded-2xl border-neutral-800 p-2'>
<FaJava className='text-6xl  text-orange-400 '/>    
        </motion.div>

        </motion.div>

      
    </div>
  )
}

export default Technology
