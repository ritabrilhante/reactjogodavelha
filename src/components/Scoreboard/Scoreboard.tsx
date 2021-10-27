import './Scoreboard.css'

export default function Scoreboard() {
  return (
    <section className="scoreboard">
      <article id="xis-player">
        <img src="img/xis.svg"/>
        <p id="result-xis">1</p>
      </article>

      <article id="ball-player">
        <img src="img/ball.svg"/>
        <p id="result-ball">1</p>
      </article>
    </section>
  );
}

