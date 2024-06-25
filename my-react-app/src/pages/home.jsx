
import Header from '../components/Header.jsx'
import Homepage_title from '../components/Homepage-title.jsx'
import Buttons from '../components/Buttons.jsx'

function Home() {

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



    </>
  )
}

export default Home