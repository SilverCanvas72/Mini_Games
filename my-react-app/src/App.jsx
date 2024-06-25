import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Rock from './pages/rockPaperScissors.jsx'

function App() {

  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const choices = ["rock", "paper", "scissors"];

  const onButtonClick = (choice) => {
    setUserChoice(choice);
}



  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/rockpaperscissors" element={<Rock/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


