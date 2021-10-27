import './App.css';

import Board from './components/Board/Board';
import Scoreboard from './components/Scoreboard/Scoreboard';
import Modal from './components/Modal/Modal';
import PlayerTurn from './components/PlayerTurn/PlayerTurn';

import { createContext } from 'react';

const player1 = "xis";
const player2 = "ball";
const turnOf = player1;
export const PlayerTurnContext = createContext(turnOf);

export default function App() {

  return (
    <PlayerTurnContext.Provider value={turnOf}>
      <header>
        <h1>Jogo da Velha</h1>
        <span>Clique para começar!</span>
      </header>

      <main>
        <Scoreboard />
        <PlayerTurn />
        <Board />
        <Modal />
      </main>

      <footer>Rita Brilhante | 2021</footer>
    </PlayerTurnContext.Provider>
  );
}
