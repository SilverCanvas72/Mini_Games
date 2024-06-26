import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Rock from './pages/rockPaperScissors.jsx'
import Difference from './pages/findthedifference.jsx'
import FindTwo from './pages/findDifference2.jsx'
import FindThree from './pages/findDifference3.jsx'
import FindFour from './pages/findDifference4.jsx'
import FindComplete from './pages/findComplete.jsx'
import ChooseStart from './pages/choseStart.jsx'
import Paths from './pages/paths.jsx'
import Cliff from './pages/cliff.jsx'
import Trees from './pages/trees.jsx'
import Fox from './pages/fox.jsx'
import FoxTwo from './pages/foxTwo.jsx'
import River from './pages/river.jsx'
import Almost from './pages/almost.jsx'
import ChooseDone from './pages/chooseDone.jsx'
import Dead from './pages/dead.jsx'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/rockpaperscissors" element={<Rock/>}/>
          <Route path="/findthedifference" element={<Difference/>}/>
          <Route path="/findthedifference2" element={<FindTwo/>}/>
          <Route path="/findthedifference3" element={<FindThree/>}/>
          <Route path="/findthedifference4" element={<FindFour/>}/>
          <Route path="/youdidit" element={<FindComplete/>}/>
          <Route path="/chooseStart" element={<ChooseStart/>}/>
          <Route path="/paths" element={<Paths/>}/>
          <Route path="/cliff" element={<Cliff/>}/>
          <Route path="/trees" element={<Trees/>}/>
          <Route path="/fox" element={<Fox/>}/>
          <Route path="/foxTwo" element={<FoxTwo/>}/>
          <Route path="/river" element={<River/>}/>
          <Route path="/almost" element={<Almost/>}/>
          <Route path="/choosedone" element={<ChooseDone/>}/>
          <Route path="/dead" element={<Dead/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


