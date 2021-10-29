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

  return (

    <>
      <header>
        <h1>Jogo da Velha</h1>
        <span>Clique para começar!</span>
      </header>

      <main>
        <Scoreboard />
        <PlayerTurn turnOf={turnOf} />
        <Board setTurnOf={setTurnOf} turnOf={turnOf} setWinner={setWinner}/>
        <Modal />
      </main>

      <footer>Rita Brilhante | 2021</footer>
    </>
  );
}
