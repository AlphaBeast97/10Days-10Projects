import React, { useEffect, useState } from 'react'

const LandingPage = () => {

  const [isVisible, setIsVisible] = useState(true)
  const [isRemoving, setIsRemoving] = useState(false)

  const handleButtonClick = () => {
    setIsRemoving(true);
  }

  useEffect(() => {
    if(isRemoving){
      setTimeout(() => {
        setIsVisible(false);
      }, 500)
    }
  }, [isRemoving])

  return (
    <>
      {isVisible && (
        <main className={`bg-gray-100 fixed top-0 left-0 w-full h-screen z-10 transition-transform duration-500 ease-in-out transform ${isRemoving ? '-translate-y-full' : 'translate-y-0'} h-dvh flex flex-wrap justify-evenly items-center`}>
          <img src="./Images/dices 1.png" alt="Dice.png" />
          <div className="flex flex-col">
            <p className='font-extrabold lg:text-8xl text-7xl'>DICE GAME</p>
            <button onClick={handleButtonClick} className='cursor-pointer rounded border-2 text-white bg-gray-900 p-5 transition-all hover:bg-white hover:border-black hover:text-gray-900 hover:shadow-2xl'>Play Now</button>
          </div>
        </main>
      )}
    </>
  )
}

export default LandingPage