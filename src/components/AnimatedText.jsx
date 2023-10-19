import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedText = ({ text }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
      
    }
  }, [control, inView]);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
        ease: "easeInOut",
        delay: "1",
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        type: "tween",
      },
    },
  };

  return (
    <>
      <motion.div
        ref={ref}
        variants={sentence}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{overflow:'hidden'}}
        
      >
        <div 
        // className="about-paragraph"
        >
          {text.split("").map((word, index) => {
            return word === ' ' ?
            <motion.span
            //   className="hero-text"
              style={{ marginRight: "0rem", display: "inline-block" }}
              key={index}
              variants={letter}
            >
              &nbsp;
            </motion.span>
            :
            <motion.span
            // className="hero-text"
            style={{ marginRight: "0rem", display: "inline-block" }}
            key={index}
            variants={letter}
          >
            {word}
          </motion.span>
          })}
        </div>
      </motion.div>
    </>
  );
};

export default AnimatedText;
