import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'motion/react';

const LandingPage = ({ setStart }) => {

  const [isRemoving, setIsRemoving] = useState(false)

  const handleButtonClick = () => {
    setIsRemoving(true);
  }

  useEffect(() => {
    if (isRemoving) {
      setTimeout(() => {
        setStart(true);
      }, 500);
    }
  }, [isRemoving, setStart]);

  const mainVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: '-100vh', transition: { duration: 0.5, ease: 'easeIn' } },
  };

  const imageVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
    exit: { scale: 0.9, opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut', delay: 0.4 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  const buttonVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.6 } },
    exit: { scale: 0.95, opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  return (
    <AnimatePresence>
    {!isRemoving && (
      <motion.main
        key="landing-page"
        className={`bg-gray-100 fixed top-0 left-0 w-full z-10 flex flex-wrap justify-evenly items-center shadow-2xl h-dvh`}
        variants={mainVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.img
          src="./Images/dices 1.png"
          alt="Dice.png"
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
        <motion.div className="flex flex-col items-center" variants={textVariants} initial="initial" animate="animate" exit="exit">
          <motion.p className='font-extrabold lg:text-8xl text-5xl' variants={textVariants}>DICE GAME</motion.p>
          <motion.button
            onClick={handleButtonClick}
            className='cursor-pointer rounded border-2 text-white bg-gray-900 p-5 transition-all hover:bg-white hover:border-black hover:text-gray-900 hover:shadow-2xl mt-6'
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            Play Now
          </motion.button>
        </motion.div>
        <motion.footer 
        variants={textVariants}
        className='border-t items-center justify-center text-xs p-2 pb-2 w-full bottom-0 absolute flex flex-col'
        >
          <p>
            Dice it is a project by <a className='text-cyan-700 transition-all hover:underline' href="https://github.com/AlphaBeast97">  Muhammad Saad Khan. </a> Made using:
          </p>
          <p className=' mt-1 flex'>
            <a href="https://react.dev/"><img className='size-5' src="./react.svg" alt="React Logo" /></a> <a href="https://tailwindcss.com/"><img className='size-5 ml-4' src="./icons8-tailwind-css.svg" alt="" /></a> <a href="https://www.netlify.com/"><img className='size-5 ml-4' src="./icons8-netlify-24.png" alt="" /></a>
          </p> 
        </motion.footer>
      </motion.main>
    )}
  </AnimatePresence>
)}

export default LandingPage