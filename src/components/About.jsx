import React from 'react'
import Bg from '../assets/Bg.png'
import Lottie from 'lottie-react';
import coffee from '../assets/Coffeeanime.json'
import { motion } from 'framer-motion'; 

const bgImage = {
    backgroundImage: `url(${Bg})`,
    backgroundcolor: "#270c03",
    backgroundPosition:"center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",
};

const About = () => {
  return (
    <div id='about' className='md:py-20 py-40' style={bgImage}>
      <motion.h1 
       initial={{opacity:0,y:100}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:1.5, delay:0.5}}
      className='text-amber-900 font-cursive text-5xl text-center'>About Us</motion.h1>
      <div className='flex flex-col md:flex-row items-center max-w-7xl mx-auto'>
        {/* image section */}
        <motion.div
         initial={{opacity:0,scale:0.5}}
         whileInView={{opacity:1,scale:1}}
         transition={{duration:1.5, delay:0.5}}
        >
            <Lottie animationData={coffee} className='md:w-[600px]'/>
        </motion.div>
        {/* text section */}
        <div className='space-y-4 px-4 md:px-0'>
            <motion.h1 
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:1.5, delay:0.5}}
            className='text-2xl font-cursive2 text-amber-900'>Passion for Perfect Coffee</motion.h1>
            <motion.p 
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:1.5, delay:0.6}}
            className='font-cursive2'>Founded in 2010, coffee shop name started as a  .. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae inventore quaerat aspernatur iure fugit saepe rerum modi accusamus quisquam nobis.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, <officiis className="lorem10"></officiis>
            </motion.p>
        </div>
      </div>
    </div>
  )
}

export default About
