import Header from '../components/Header.jsx'

function FoxTwo() {

  return (
    <>
      <Header/>

      <div className="home_container">
        <img className='chooseImg' src= "src/assets/placeholder.webp" alt="Man facing away from the camera with open arms showing "/> 

        <div className="right">

            <h2 className = "goodDescision">What's That?</h2>

            <p>
                The fox leads you through the forst to an abandoned nest of birds. You give them some food and feed them
                untill their mother returns. 
            </p>

            <div className='buttonsContainer'>
                <a href="/">
                    <button className='chooseButton3'> Continue</button>
                </a>
            </div>

        </div>

   

      </div>



    </>
  )
}

export default FoxTwo