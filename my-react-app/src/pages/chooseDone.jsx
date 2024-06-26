import Header from '../components/Header.jsx'

function ChooseDone() {

  return (
    <>
      <Header/>

      <div className="home_container">
        <img className='chooseImg' src= "src/assets/coosedone.jpg" alt="Man facing away from the camera with open arms showing "/> 

        <div className="right">

            <h2 className = "goodDescision">Congrats!</h2>

            <p>
                The river continues into an open field, it filters through some rocks that look like gems. After they
                have passed the rocks the river has a glow ot it that it did not before. There are all sorts of animals 
                drinking from it. They all seem to be young and you are sure that this is the cure. As you sip from the water your youth is 
                restored and you are able to make a quick getaway from the forest.
            </p>

            <div className='buttonsContainer'>
                <a href="/">
                    <button className='chooseButton2'> Continue</button>
                </a>
            </div>

        </div>

   

      </div>



    </>
  )
}

export default ChooseDone