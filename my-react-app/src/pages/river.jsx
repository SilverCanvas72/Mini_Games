import Header from '../components/Header.jsx'

function River() {

  return (
    <>
      <Header/>

      <div className="home_container">
        <img className='chooseImg' src= "src/assets/placeholder.webp" alt="Man facing away from the camera with open arms showing "/> 

        <div className="right">

            <h2 className = "goodDescision">Um... What?</h2>

            <p>
                You continue down the river. It begins getting dark but it doesn't matter because Nyx can illuminate
                the way. You notice yourself becoming increasingly tired and as you decide to take a break you go to take a drink 
                from the river. As you lean above the water you see your reflection clearly.  It looks like oyu have aged amost 80 
                years in a few hours. You begin to panic. Do you...

            </p>

            <div className='buttonsContainer'>
                <a href="/almost">
                    <button className='chooseButton3'> Continue Following The River</button>
                </a>
                <a href = '/paths'>
                    <button className='chooseButton1'> Go Back</button>
                </a>
            </div>

        </div>

   

      </div>



    </>
  )
}

export default River