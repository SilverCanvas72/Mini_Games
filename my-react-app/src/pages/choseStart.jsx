
import Header from '../components/Header.jsx'

function ChooseStart() {

  return (
    <>
      <Header/>

      <div className="home_container">
        <img id='bored-dog' className='chooseImg' src= "src/assets/Bored-dog.jpg" alt="Man facing away from the camera with open arms showing "/> 

        <div className="right">

            <h2 className = "goodDescision">Ready? Let's Go!</h2>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias voluptates perferendis ipsa
             deleniti recusandae obcaecati eos tenetur, fuga ratione cupiditate accusantium doloremque quasi incidunt,
              libero quae tempora porro laboriosam harum.</p>

            <div className='buttonsContainer'>
                <button className='chooseButton1'> option 1</button>
                <button className='chooseButton2'> option 2</button>
                <button className='chooseButton3'> option 3</button>
                <button className='chooseButton4'> option 4</button>
                <button className='chooseButton5'> option 5</button>
            </div>

        </div>

   

      </div>



    </>
  )
}

export default ChooseStart