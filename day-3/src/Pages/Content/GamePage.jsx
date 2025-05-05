import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from 'motion/react';

const button = (count) => {
  return (
    <button className="border size-8 lg:size-15 cursor-pointer">
      {count}
    </button>
  );
};

const count = [1, 2, 3, 4, 5, 6];

const GamePage = () => {
  const [Score, setScore] = useState(0);
  const [userNum, setUserNum] = useState(0);
  const [compNum, setCompNum] = useState(1);
  const [isBlur, setIsBlur] = useState(false);
  const [isUseNumSelected, setIsUseNumSelected] = useState(true);
  const [isShowRulePressed, setIsShowRulePressed] = useState(false);

  const mainY = useMotionValue(0);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const rulesVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2, ease: 'easeInOut' } },
  };

  const errorVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15, ease: 'easeIn' } },
  };

  const getRandomNumber = () => {
    if (userNum === 0) {
      setIsUseNumSelected(false);
    } else {
      setIsBlur(true)
      const randNum = Math.floor(Math.random() * 6) + 1;
      setCompNum(randNum);
    }

    setTimeout(() => {
      setIsBlur(false);
    }, 300);
  };
  
  const HandelNumber = (count) => {
    setUserNum(count);
    setIsUseNumSelected(true);
  };

  useEffect(() => {
    if (compNum === userNum) {
      setScore(Score + compNum);
    }
  }, [compNum]);

  const showRule = () => {
    setIsShowRulePressed(!isShowRulePressed);
    motion.set(mainY, isShowRulePressed ? 0 : 100); // Adjust the '100' value as needed
  };

  return (
    <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    className="lg:pl-40 lg:pr-40"
    >
      <header className="flex justify-between m-10 ">
        <div className="font-semibold flex flex-col items-center">
          <p className="lg:text-8xl text-5xl">{Score}</p>
          <p>Total Score</p>
        </div>
        <div className="font-semibold flex flex-col justify-around items-end">
          {/* error */}
          <AnimatePresence>
            {isUseNumSelected ||( <motion.p 
              key="no-selection-error"
              variants={errorVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-red-500"
              >You have not selected any number</motion.p>
            )}
          </AnimatePresence>
          <p className="flex lg:gap-5 gap-2">
            {count.map((count) => (
              <span
                onClick={() => HandelNumber(count)}
                className={`transition-all ${userNum === count && 'bg-black text-white'} hover:bg-gray-900 hover:text-white`}
                key={count}
              >
                {button(count)}
              </span>
            ))}
          </p>
          {userNum > 0 ?  <p>Selected Number is {userNum}</p> :<p>Select Number</p>}
        </div>
      </header>
      
      <motion.main  style={{ y: mainY }} className="flex font-medium justify-center lg:mt-20 h-100">
        <div className="flex flex-col items-center justify-around">
          <img onClick={() => {getRandomNumber()}} className={`lg:size-100 transition-all hover:scale-110 cursor-pointer active:scale-100 ${isBlur ? 'blur-sm' : ''}`} src= {`./Images/dice_${compNum}.png`} alt="dice" />
          <p className="mt-5">Click on Dice to roll</p>
          <button onClick={() => {setScore(0); setIsUseNumSelected(true); setUserNum(0)}} name="reset" className="transition-all hover:scale-105 hover:shadow-2xl shadow-blue-gray-700 border p-2 pl-10 pr-10 cursor-pointer mt-10 rounded-md active:scale-100">Resent Score</button>
          <button onClick={() => showRule()} name="rules" className="transition-all hover:scale-105 hover:shadow-2xl shadow-blue-gray-700 cursor-pointer bg-gray-900 text-white border p-2 pl-12 pr-12 mt-5 rounded-md active:scale-100">Show Rules</button>
        </div>
      </motion.main>
      <AnimatePresence>
        { isShowRulePressed &&
          ( <motion.div
            key="rules-modal"
            variants={rulesVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col lg:mt-50 md:mt-50 mt-20 pb-20 justify-center items-center"
            >
              <div className="border p-5 bg-amber-100 text-black rounded-lg">
                <h2 className="text-lg font-semibold">How to play dice game:</h2>
                <ul className="text-sm">
                  <li className="list-decimal">Select any number.</li>
                  <li className="list-decimal">Click on dice image.</li>
                  <li className="list-decimal">After click on  dice  if selected number is equal to dice number you will get same point as dice. </li>
                  <li className="list-decimal">Click on Reset button to reset your score.</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </motion.div>
  );
};

export default GamePage;
