import React from 'react'
import {CONTACT} from '../constants/index.js'
import {motion} from 'framer-motion'
 
function Contact() {
  return (
    <div id='Contact' className='border-b border-neutral-900 pb-20'>
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.8}} className='text-3xl text-center my-10'>Get in Touch</motion.h2>
      <div className="text-center tracking-tighter ">
       <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className='pb-2'>{CONTACT.address}</motion.p>
       <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='pb-2'>{CONTACT.phoneNo}</motion.p>
     <motion.a  whileInView={{opacity:1,x:0 }} initial={{opacity:0,x:100}} transition={{duration:1}}  href="#" className='border-b border-slate-800'>{CONTACT.email}</motion.a>
      </div>
    </div>
  )
}

export default Contact
