function Buttons() {
  
    return (
      <>
        <div className="game_buttons">
          <a href="/rockpaperscissors">
            <button className= "game-button" id= "game-button1">&#129704;<br/>Rock<br/>Paper<br/>Scissors</button>
          </a>
          <button className= "game-button" id= "game-button2">&#11093;&#10060;<br/>Naughts<br/>and<br/>Crosses</button>
          <button className= "game-button" id= "game-button3">&#128170;<br/>Choose<br/>Your Own<br/>Adventure</button>
          <button className= "game-button" id= "game-button4">&#9999;&#128220;<br/><br/>General<br/>Knowledge</button>
          <a href="/findthedifference">
            <button className= "game-button" id= "game-button5">&#128270;<br/>Find<br/>The<br/>Difference</button>  
          </a>          
        </div>
      </>
    )
  }

  export default Buttons