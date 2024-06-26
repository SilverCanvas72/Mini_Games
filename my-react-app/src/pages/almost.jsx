import Header from '../components/Header.jsx'

function Almost() {

  return (
    <>
      <Header/>

      <div className="home_container">
        <img className='chooseImg' src= "src/assets/placeholder.webp" alt="Man facing away from the camera with open arms showing "/> 

        <div className="right">

            <h2 className = "goodDescision">Hope?</h2>

            <p>
                As you struggle along the path you see a light through the trees
            </p>

            <div className='buttonsContainer'>
                <a href="/choosedone">
                    <button className='chooseButton1'> Continue</button>
                </a>
            </div>

        </div>

   

      </div>



    </>
  )
}

export default Almost