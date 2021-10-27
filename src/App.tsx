import './App.css';

import Board from './components/Board/Board';
import Scoreboard from './components/Scoreboard/Scoreboard';
import Modal from './components/Modal/Modal';
import PlayerTurn from './components/PlayerTurn/PlayerTurn';

import { useState } from 'react';

export default function App() {
  const [turnOf, setTurnOf] = useState('xis');

  const changeTurnOf = () => {
    setTurnOf(turnOf === 'xis' ? 'ball' : 'xis');

    console.log('trocou para: ', turnOf);
  }

  return (
    <>
      <header>
        <h1>Jogo da Velha</h1>
        <span>Clique para começar!</span>
      </header>

      <main>
        <Scoreboard/>
        <PlayerTurn turnOf={turnOf} />
        <Board selectField={() => changeTurnOf()} />
        <Modal />
      </main>

      <footer>Rita Brilhante | 2021</footer>
    </>
  );
}
