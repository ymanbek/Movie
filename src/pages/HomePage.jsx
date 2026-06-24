import { Link } from "react-router-dom";
import movies from "../data/Movies";
function HomePage() {
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>Cinema Booking App</h1>

      <Link to="/my-bookings">
        <button>My Bookings</button>
      </Link>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <img
              src={movie.poster}
              alt={movie.title}
              width="100%"
              height="250"
            />

            <h3>{movie.title}</h3>

            <p>Genre: {movie.genre}</p>

            <p>
              Duration:
              {movie.duration}
            </p>

            <Link to={`/movie/${movie.id}`}>Подробнее</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
