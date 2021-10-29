import './Board.css';

interface props {
  turnOf: string,
  setTurnOf: React.Dispatch<React.SetStateAction<string>>,
}

export default function Board(BoardProps: props){
  const fieldsIds = [['a1','a2','a3'],['b1','b2','b3'],['c1','c2','c3']]
  const {setTurnOf, turnOf} = BoardProps; //Desestructuring;

  function setFields(fieldId:string) {
    const field = document.getElementById(fieldId)
    if (field !== null) {
      if (field.innerHTML !== '') {return}
      field.innerHTML = `<img src="img/${turnOf}.svg">`
    }

    if (turnOf === 'xis') {
      setTurnOf('ball')
    } else {
      setTurnOf('xis')
    }
  }

  return (
    <>
      <table>
        {fieldsIds.map(row => (
          <tr>
            {row.map(fieldId => (
              <td id={fieldId} className='field' onClick={()=>{setFields(fieldId)}}></td>
            ))}
          </tr>
        ))}
      </table>

      <button id='reset-scoreboard'>Zerar Placar</button>
    </>
  );
}
