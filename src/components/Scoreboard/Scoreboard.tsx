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
        <img src="img/xis.svg"/>
        <p>{scoreXis}</p>
      </article>

      <article id="ball-player">
        <img src="img/ball.svg"/>
        <p>{scoreBall}</p>
      </article>
    </section>
  );
}

