import { useState } from 'react'
import Header from './Header.jsx'
import Homepage_title from './Homepage-title.jsx'
import Buttons from './Buttons.jsx'

function App() {

  return (
    <>
      <Header/>

      <Homepage_title/>

      <div className="home_container">
        <img id='bored-dog' src= "src/assets/Bored-dog.jpg" alt="Man facing away from the camera with open arms showing "/> 

        <div className="right">
          <img id='freedom' src= "src/assets/Freedom.jpg" alt="Man standning on "/>
          <Buttons/>
        </div>
      </div>

      <button id='quiz_button'>Take Quiz</button>


    </>
  )
}

export default App


