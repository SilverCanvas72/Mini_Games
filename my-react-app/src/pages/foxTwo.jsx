import Header from '../components/Header.jsx'

function FoxTwo() {

  return (
    <>
      <Header/>

      <div className="home_container">
        <img className='chooseImg' src= "src/assets/foxtwo.jpg" alt="Man facing away from the camera with open arms showing "/> 

        <div className="right">

            <h2 className = "goodDescision">That's Weird...</h2>

            <p>
                The fox leads you through the forest to an abandoned nest of birds. You give them some food and feed them
                until their mother returns. She is very thankful and offers to guide you back out of the forest. She walks
                along with you and her chicks follow. You think that the chicks are awefully young to be coming with you. You stop 
                and the mother says she cannot guide you any further. You look down at the chicks and notice they are now longer 
                chicks but almost fully grown. As the birds fly off you continue down the path.

            </p>

            <div className='buttonsContainer'>
                <a href="/paths">
                    <button className='chooseButton3'> Continue</button>
                </a>
            </div>

        </div>

   

      </div>



    </>
  )
}

export default FoxTwo