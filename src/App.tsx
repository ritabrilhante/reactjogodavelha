import './App.css';

import Board from './components/Board/Board';
import Scoreboard from './components/Scoreboard/Scoreboard';
import Modal from './components/Modal/Modal';
import PlayerTurn from './components/PlayerTurn/PlayerTurn';

import { useState } from 'react';

export default function App() {

  const player1 = 'xis';
  const player2 = 'ball';

  const [turnOf, setTurnOf] = useState('xis');
  const [winner, setWinner] = useState('')
  const [round, setRound] = useState(0);
  const [scoreXis, setScoreXis] = useState(0);
  const [scoreBall, setScoreBall] = useState(0);

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
        <Board setTurnOf={setTurnOf} turnOf={turnOf} setWinner={setWinner} round={round} setRound={setRound} updateScoreboard={updateScoreboard}/>
        {winner !== '' ? <Modal winner={winner} setWinner={setWinner} setRound={setRound} setTurnOf={setTurnOf}/> : <></>}
      </main>

      <footer>Rita Brilhante | 2021</footer>
    </>
  );
}
