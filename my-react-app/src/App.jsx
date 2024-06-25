import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Rock from './pages/rockPaperScissors.jsx'
import Difference from './pages/findthedifference.jsx'
import Difference2 from './pages/findthedifference2.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/rockpaperscissors" element={<Rock/>}/>
          <Route path="/findthedifference" element={<Difference/>}/>
          <Route path="/findthedifference2" element={<Difference2/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


