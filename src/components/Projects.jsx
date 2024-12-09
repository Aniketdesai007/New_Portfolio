import React from 'react'
import {PROJECTS} from '../constants/index.js'
import {motion} from 'framer-motion'
function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-20 pt-16'>
      
               <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className='text-4xl text-center my-20'>Projects</motion.h2>
               <div>
                {
                  PROJECTS.map((item,index)=>(
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                      <div className="w-full lg:w-1/4">
                      <a href={item.Link}>
                          <motion.img whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} src={item.image} height={150} width={150} className='mb-6 rounded-md'  alt={item.title} />
</a></div>
                      <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
                      <h6 className='mb-2  font-semibold'>{item.title}</h6>
                      <p className='mb-6 text-neutral-500'>{item.description}</p>
                      { 

                      item.technologies.map((tech,index)=>(
                        <span key={index} className='px-2 py-1 rounded text-sm bg-neutral-900 font-medium mr-2 text-purple-500'>{tech}</span>
                      ))


                      }

                      
                      </motion.div>


                    </div>
                  ))
                }
               </div>
 
       
     
     
      
    </div>
  )
}

export default Projects
