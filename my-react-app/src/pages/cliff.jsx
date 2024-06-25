import Header from '../components/Header.jsx'
import GoHome from '../components/GoHome.jsx'

function Cliff() {

  return (
    <>
      <Header/>

      <div className="home_container">
        <img className='chooseImg' src= "src/assets/placeholder.webp" alt="Man facing away from the camera with open arms showing "/> 

        <div className="right">

            <h2 className = "badDescision">Oops...</h2>

            <p>
                The walk along the rocky path is a struggle. Nyx just floats above it all, constantlty looking back at you with
                a dissaproving look. As he becomes increasingly annoyed you relise that you are becoming slower and slower. 
                You glance at your hands and see that your hands more wrinkles than usual. As you begin to sit down a rock
                gives way and you fall.
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

export default Cliff