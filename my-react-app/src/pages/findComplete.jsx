import Header from '../components/Header.jsx'
import GoHome from '../components/GoHome.jsx'


function FindComplete() {

  return (
    <>
        <Header/>
        <h1 className='subtitle'>You did it!</h1>
        <h1 className='subtitle2'>Is there something else you would like to do?</h1>
        <GoHome/>
    </>
  )
}

export default FindComplete