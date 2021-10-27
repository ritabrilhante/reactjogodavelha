import './PlayerTurn.css'

import { useContext } from 'react';
import { PlayerTurnContext } from '../../App';

export default function PlayerTurn() {
  const turnOf = useContext(PlayerTurnContext);

  return(
    <div className="player-turn">
      <p>Vez de:</p>
      <img id="wich-player" src={`img/${turnOf}.svg`}/>
    </div>
  );
}
