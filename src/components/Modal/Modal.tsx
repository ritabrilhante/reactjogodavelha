import './Modal.css'

interface props {
  winner: string,
  setWinner: React.Dispatch<React.SetStateAction<string>>,
  setRound: React.Dispatch<React.SetStateAction<number>>,
  setTurnOf: React.Dispatch<React.SetStateAction<string>>,
  setRefreshBtn: () => void
}

export default function Modal(ModalProps: props) {
  const {winner, setWinner, setRound, setTurnOf, setRefreshBtn} = ModalProps;

  return(
    <div className="active-modal" id="active">
      <div id="winner-modal">
        <h3 id="text-modal">{winner !== 'draw'? 'O vencedor foi' : 'Empatou'}</h3>
        <img id="winner-image" src={`img/${winner}.svg`}/>

        <button id="refresh" onClick={setRefreshBtn}>
          <img src="img/repeat.svg"/>
          Jogar Novamente
        </button>
      </div>
    </div>
  );
}
