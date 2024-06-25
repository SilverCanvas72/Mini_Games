import Header from '../components/Header.jsx'

function Fox() {

  return (
    <>
      <Header/>

      <div className="home_container">
        <img className='chooseImg' src= "src/assets/placeholder.webp" alt="Man facing away from the camera with open arms showing "/> 

        <div className="right">

            <h2 className = "goodDescision">What's That?</h2>

            <p>
                The fox walks to nyx and asks him for you two to follow him.
            </p>

            <div className='buttonsContainer'>
                <a href="/foxTwo">
                    <button className='chooseButton3'> Follow Him</button>
                </a>
                <a href = '/paths'>
                    <button className='chooseButton1'> Ignore And Keep Walking</button>
                </a>
            </div>

        </div>

   

      </div>



    </>
  )
}

export default Fox