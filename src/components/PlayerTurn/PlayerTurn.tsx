import './PlayerTurn.css'

interface Props {
  turnOf: string;
}

export default function PlayerTurn({ turnOf }: Props) {
  return(
    <div className="player-turn">
      <p>Vez de:</p>
      <img id="wich-player" src={`img/${turnOf}.svg`}/>
    </div>
  );
}
