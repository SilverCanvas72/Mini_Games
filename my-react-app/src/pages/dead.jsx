import Header from '../components/Header.jsx'
import GoHome from '../components/GoHome.jsx'

function Dead() {

  return (
    <>
      <Header/>

      <div className="home_container">
        <img className='chooseImg' src= "src/assets/placeholder.webp" alt="Man facing away from the camera with open arms showing "/> 

        <div className="right">

            <h2 className = "badDescision">Oops...</h2>

            <p>
                As you desperatly try to make the journey back yu collapse and die of old age.
            </p>

            <div className='buttonsContainer'>
                <a href='chooseStart'>
                    <button className='chooseButton3'> Try Again</button>
                </a>
            </div>

            <GoHome/>

        </div>

   

      </div>



    </>
  )
}

export default Dead