import React,{useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AnimatedReveal({children}) {
    const controls = useAnimation()
    const [ref,inView] = useInView()
    const reveal = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible:{
            opacity:1,
            y:0,
            transition: {
                duration: 0.5,
                delay: 0.5,
              },
        }
    }


    useEffect(() => {
        if(inView){
            controls.start("visible")
       }
    }, [controls, inView]) 


  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={reveal}>
       {children}
    </motion.div>
  )
}
