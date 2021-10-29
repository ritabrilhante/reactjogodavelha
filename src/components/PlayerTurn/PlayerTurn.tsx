import { useState } from 'react';
import './PlayerTurn.css'

export interface props {
  turnOf: string,
}

export default function PlayerTurn(playerTurnProps: props) {

  return(
    <div className="player-turn">
      <p>Vez de:</p>
      <img id="wich-player" src={`img/${playerTurnProps.turnOf}.svg`} alt={`Vez de ${playerTurnProps.turnOf}`}/>
    </div>
  );
}
