import Header from '../components/Header.jsx'

function Paths() {

  return (
    <>
      <Header/>

      <div className="home_container">
        <img className='chooseImg' src= "src/assets/paths.jpg" alt="Man facing away from the camera with open arms showing "/> 

        <div className="right">

            <h2 className = "goodDescision">What's That?</h2>

            <p>
                Infront of you you see three distinct paths, one leads to a dark forest with thickly packed trees,
                one leads to a rock path full of large boulders and loose rocks but you cannot see where it leads.
                The last path is besides a river that looks very deep and cold. Which path do you take?
            </p>

            <div className='buttonsContainer'>
                <a href="/trees">
                    <button className='chooseButton4'> Thick Trees</button>
                </a>
                <a href = '/cliff'>
                    <button className='chooseButton5'> Rocky Path</button>
                </a>
                <a href="/river">
                    <button className='chooseButton2'> Deep River</button>
                </a>
            </div>

        </div>

   

      </div>



    </>
  )
}

export default Paths