import './Board.css'

export default function Board(){
  return (
    <>
      <table>
        <tr id="row-1">
            <td id="a1" className="field"></td>
            <td id="a2" className="field"></td>
            <td id="a3" className="field"></td>
        </tr>

        <tr id="row-2">
            <td id="b1" className="field"></td>
            <td id="b2" className="field"></td>
            <td id="b3" className="field"></td>
        </tr>

        <tr id="row-3">
            <td id="c1" className="field"></td>
            <td id="c2" className="field"></td>
            <td id="c3" className="field"></td>
        </tr>
      </table>

      <button id="reset-scoreboard">Zerar Placar</button>
    </>
  );
}
