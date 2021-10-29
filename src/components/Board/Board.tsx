import './Board.css';
import { useState } from 'react';

interface props {
  turnOf: string,
  setTurnOf: React.Dispatch<React.SetStateAction<string>>,
  setWinner: React.Dispatch<React.SetStateAction<string>>,
}

export default function Board(BoardProps: props){
  const fieldsIds = [['a1','a2','a3'],['b1','b2','b3'],['c1','c2','c3']]
  const {setTurnOf, turnOf, setWinner} = BoardProps; //Desestructuring;

  const [round, setRound] = useState(0);

  const winState = [
    ['a1','a2','a3'],
    ['b1','b2','b3'],
    ['c1','c2','c3'],

    ['a1','b1','c1'],
    ['a2','b2','c2'],
    ['a3','b3','c3'],

    ['a1','b2','c3'],
    ['c1','b2','a3']
]

  function setFields(fieldId:string) {
    const field = document.getElementById(fieldId)
    if (field !== null) {
      if (field.innerHTML !== '') {return}
      field.innerHTML = `<img src="img/${turnOf}.svg">`
    }

    verifyWinner(turnOf, fieldId)

    if (turnOf === 'xis') {
      setTurnOf('ball')
    } else {
      setTurnOf('xis')
    }

    setRound(round + 1);
    if(round === 8) {
      setWinner('draw')
    }
  }

  function verifyWinner(player: string, fieldId: string){
    const fields = document.getElementsByClassName("field");
    const groupsToCheck = winState.filter(state => state.includes(fieldId));
    for(let group of groupsToCheck) {
        const [id1,id2,id3] = group;

        if (fields[id1].innerHTML === fields[id2].innerHTML && fields[id1].innerHTML === fields[id3].innerHTML) {
            setWinner(player);
          return true;
        };
    }

    return false;
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
