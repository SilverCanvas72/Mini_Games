import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Rock from './pages/rockPaperScissors.jsx'
import Difference from './pages/findthedifference.jsx'
import FindTwo from './pages/findDifference2.jsx'
import FindThree from './pages/findDifference3.jsx'
import FindFour from './pages/findDifference4.jsx'
import FindComplete from './pages/findComplete.jsx'

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

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


