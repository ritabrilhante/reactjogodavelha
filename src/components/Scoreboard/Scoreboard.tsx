import './Scoreboard.css'

interface props {
  scoreXis: number,
  scoreBall: number
}

export default function Scoreboard(ScoreboardProps: props) {
  const {scoreXis, scoreBall} = ScoreboardProps;
  return (
    <section className="scoreboard">
      <article id="xis-player">
        <img src="img/xis.svg" alt="xis"/>
        <p>{scoreXis}</p>
      </article>

      <article id="ball-player">
        <img src="img/ball.svg" alt="ball"/>
        <p>{scoreBall}</p>
      </article>
    </section>
  );
}

