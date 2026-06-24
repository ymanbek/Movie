import { Link, useParams } from "react-router-dom";
import Movies from "../data/movies";

function MovieDetailsPage() {
  const { id } = useParams();

  const movie = Movies.find((item) => item.id === Number(id));

  const sessions = ["12:00", "15:00", "18:00", "21:00"];

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <img src={movie.poster} alt={movie.title} width="300" />

      <h1>{movie.title}</h1>

      <p>{movie.description}</p>

      <p>Genre: {movie.genre}</p>

      <p>
        Duration:
        {movie.duration}
      </p>

      <h2>Sessions</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        {sessions.map((session) => (
          <Link key={session} to={`/booking/${movie.id}`}>
            <button>{session}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieDetailsPage;
