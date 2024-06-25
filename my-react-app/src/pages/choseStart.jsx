
import Header from '../components/Header.jsx'

function ChooseStart() {

  return (
    <>
      <Header/>

      <div className="home_container">
        <img className='chooseImg' src= "src/assets/placeholder.webp" alt="Man facing away from the camera with open arms showing "/> 

        <div className="right">

            <h2 className = "goodDescision">Ready? Let's Go!</h2>

            <p>You are walking through the woods. With your aquaintance, "Nyx" as you are exploring this new land a fox approaches you
                and lays on its back, looking up at you. Do you...
            </p>

            <div className='buttonsContainer'>
                <a href='/paths'>
                    <button className='chooseButton1'> Continue Walking</button>
                </a>
                <a href="/fox">
                    <button className='chooseButton2'> Talk To The Fox</button>
                </a>
            </div>

        </div>

   

      </div>



    </>
  )
}

export default ChooseStart