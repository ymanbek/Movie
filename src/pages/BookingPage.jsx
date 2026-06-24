import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBooking } from "../redux/bookingSlice";

function BookingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ticketPrice = 300;

  const occupiedSeats = [3, 7, 10, 15, 18];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = Array.from({ length: 30 }, (_, index) => index + 1);

  const handleSeatClick = (seat) => {
    if (occupiedSeats.includes(seat)) return;

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((item) => item !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const totalPrice = selectedSeats.length * ticketPrice;

  const handleCheckout = () => {
    dispatch(
      setBooking({
        selectedSeats,
        totalPrice,
      })
    );

    navigate("/checkout");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Select Seats</h1>

      <div
        style={{
          display: "flex",
          gap: "40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 60px)",
            gap: "10px",
          }}
        >
          {seats.map((seat) => {
            const isOccupied = occupiedSeats.includes(seat);

            const isSelected = selectedSeats.includes(seat);

            return (
              <button
                key={seat}
                onClick={() => handleSeatClick(seat)}
                disabled={isOccupied}
                style={{
                  width: "60px",
                  height: "60px",
                  border: "none",
                  cursor: isOccupied ? "not-allowed" : "pointer",
                  color: "#fff",
                  borderRadius: "8px",

                  backgroundColor: isOccupied
                    ? "red"
                    : isSelected
                    ? "green"
                    : "gray",
                }}
              >
                {seat}
              </button>
            );
          })}
        </div>

        <div>
          <h2>Booking Summary</h2>

          <p>
            <strong>Seats:</strong>{" "}
            {selectedSeats.length ? selectedSeats.join(", ") : "None"}
          </p>

          <p>
            <strong>Tickets:</strong> {selectedSeats.length}
          </p>

          <p>
            <strong>Total:</strong> {totalPrice} сом
          </p>

          <button
            disabled={selectedSeats.length === 0}
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
