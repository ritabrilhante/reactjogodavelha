import './App.css';
import Board from './Components/Board/Board';
import Scoreboard from './Components/Scoreboard/Scoreboard';

function App() {
  return (
    <>
      <header>
        <h1>Jogo da Velha</h1>
        <span>Clique para começar!</span>
      </header>

      <main>
        <Scoreboard/>
        <Board/>
        <button id="reset-scoreboard">Zerar Placar</button>
      </main>

      <footer>Rita Brilhante | 2021</footer>
    </>
  );
}

export default App;
