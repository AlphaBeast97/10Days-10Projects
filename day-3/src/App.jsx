import React, { useState } from 'react'
import LandingPage from './Pages/Landing/LandingPage'
import GamePage from './Pages/Content/GamePage'

const App = () => {

  const [startGame, setStartGame] = useState(false)
  return (
    <div>
      {!startGame ? (<LandingPage setStart ={setStartGame} />) : (<GamePage />)}      
    </div>
  )
}

export default App