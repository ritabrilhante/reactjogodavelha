import './Modal.css'

export default function Modal() {
  return(
    <div className="active-modal" id="active">
      <div id="winner-modal">
        <h3 id="text-modal">O vencedor foi</h3>
        <img id="winner-image" src="img/xis.svg"/>

        <button id="refresh">
          <img src="img/repeat.svg"/>
          Jogar Novamente
        </button>
      </div>
    </div>
  );
}
