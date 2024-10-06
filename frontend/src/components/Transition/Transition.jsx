// import React from "react";
import {animate, motion} from 'framer-motion';

const OpacityAnimation = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit:{
    opacity: 0
  }
}

const RotateAnimation = {
  initial: {
    rotateY: 90,
  },
  animate: {
    rotateY: 0,
  },
  exit:{
    rotateY: -90,
  }
  
}

const ZoomAnimation = {
  initial: {
    scale: 0.7,
    opacity: 1,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  exit:{
    scale: 0.7,
    opacity: 0,
  }
  
}

const WidthAnimation = {
  initial: {
    width: 0,
  },
  animate: {
    width: '100%',
  },
  exit:{
   width: '100%',
   x: window.innerWidth,
  }
  
}

const Transition = ({children}) => {
  return  (
     <>
   <motion.div className='page'
    transition={{
      ease: 'easeInOut',
      duration: 1,
    }}
    variants={WidthAnimation}
    initial= 'initial'
    animate= 'animate'
    exit= 'exit'
    >
      {children}
    </motion.div>
  </>
  )
};

export default Transition;
