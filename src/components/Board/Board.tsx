import './Board.css'

interface Props {
  selectField: () => void;
}

export default function Board({ selectField }: Props){
  return (
    <>
      <table>
        <tr id="row-1">
            <td id="a1" onClick={() => selectField()} className="field"></td>
            <td id="a2" onClick={() => selectField()} className="field"></td>
            <td id="a3" onClick={() => selectField()} className="field"></td>
        </tr>

        <tr id="row-2">
            <td id="b1" onClick={() => selectField()} className="field"></td>
            <td id="b2" onClick={() => selectField()} className="field"></td>
            <td id="b3" onClick={() => selectField()} className="field"></td>
        </tr>

        <tr id="row-3">
            <td id="c1" onClick={() => selectField()} className="field"></td>
            <td id="c2" onClick={() => selectField()} className="field"></td>
            <td id="c3" onClick={() => selectField()} className="field"></td>
        </tr>
      </table>

      <button id="reset-scoreboard">Zerar Placar</button>
    </>
  );
}
