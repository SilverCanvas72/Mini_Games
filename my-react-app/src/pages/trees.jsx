import Header from '../components/Header.jsx'
import GoHome from '../components/GoHome.jsx'

function Trees() {

  return (
    <>
      <Header/>

      <div className="home_container">
        <img className='chooseImg' src= "src/assets/trees.jpg" alt="Man facing away from the camera with open arms showing "/> 

        <div className="right">

            <h2 className = "badDescision">What?</h2>

            <p>
                You continue the walk through the forest. It continus to get darker but this does not worry you as Nyx is pretty
                much a torch so he illuminates your way. As you walk you begin to relise that your jints are becoming sore and
                you are getting tired. You draw your bow as you are beoming increasingly nervous. As you pull back the bowstring 
                you glance your hands and they are incredibly wrinkly. You rush to pour out some of your water onto the ground and
                see your reflection. You look almost 100 years old! You drop your bow and everything goes black. DEATH BY OLD AGE.
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

export default Trees