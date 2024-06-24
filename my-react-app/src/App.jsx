import { useState } from 'react'
import Header from './Header.jsx'
import Homepage_title from './Homepage-title.jsx'
import Buttons from './Buttons.jsx'

function App() {

  return (
    <>
      <Header/>
      <Homepage_title/>
      <img id='bored-dog' src= "src/assets/Bored-dog.jpg" alt="An image with text saying NORMAL IS BORING"/>
      <img id='freedom' src= "src/assets/Freedom.jpg" alt="Man standning on "/>
      <br/>
      <Buttons/>
    </>
  )
}

export default App
