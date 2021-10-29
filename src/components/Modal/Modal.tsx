import './Modal.css'

interface props {
  winner: string,
}

export default function Modal(ModalProps: props) {
  const {winner} = ModalProps;

  return(
    <div className="active-modal" id="active">
      <div id="winner-modal">
        <h3 id="text-modal">{winner !== 'draw'? 'O vencedor foi' : 'Empatou'}</h3>
        <img id="winner-image" src={`img/${winner}.svg`}/>

        <button id="refresh">
          <img src="img/repeat.svg"/>
          Jogar Novamente
        </button>
      </div>
    </div>
  );
}
