import './App.css';

import Board from './components/Board/Board';
import Scoreboard from './components/Scoreboard/Scoreboard';
import Modal from './components/Modal/Modal';
import PlayerTurn from './components/PlayerTurn/PlayerTurn';

import { useState } from 'react';

export default function App() {

  const [turnOf, setTurnOf] = useState('xis');
  const [winner, setWinner] = useState('')
  const [round, setRound] = useState(0);
  const [scoreXis, setScoreXis] = useState(0);
  const [scoreBall, setScoreBall] = useState(0);

  function resetGame() {
    setScoreXis(0);
    setScoreBall(0);
    setRefreshBtn()
  }

  function setRefreshBtn() {

    const fieldByClass = Array.from(document.getElementsByClassName("field") as HTMLCollectionOf<HTMLElement>)
    fieldByClass.map(field => field.innerHTML = "")
    setWinner('')
    setRound(0)
    setTurnOf('xis')
    }

  const updateScoreboard = () => {
    if (turnOf === 'xis') {
      setScoreXis(scoreXis + 1)
    } else {
      setScoreBall(scoreBall + 1)
    }
    console.log(scoreXis, scoreBall)
  }

  return (

    <>
      <header>
        <h1>Jogo da Velha</h1>
        <span>Clique para começar!</span>
      </header>

      <main>
        <Scoreboard scoreXis={scoreXis} scoreBall={scoreBall} />
        <PlayerTurn turnOf={turnOf} />
        <Board setTurnOf={setTurnOf} turnOf={turnOf} setWinner={setWinner} round={round} setRound={setRound} updateScoreboard={updateScoreboard} resetGame={resetGame}/>
        {winner !== '' ? <Modal winner={winner} setWinner={setWinner} setRound={setRound} setTurnOf={setTurnOf} setRefreshBtn={setRefreshBtn}/> : <></>}
      </main>

      <footer>Rita Brilhante | 2021</footer>
    </>
  );
}
