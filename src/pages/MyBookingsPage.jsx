import { useEffect, useState } from "react";

function MyBookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(storedBookings);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Bookings</h1>

      {bookings.length === 0 ? (
        <h3>No bookings found</h3>
      ) : (
        bookings.map((booking) => (
          <div
            key={booking.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "10px",
            }}
          >
            <h3>
              {booking.customer.firstName} {booking.customer.lastName}
            </h3>

            <p>
              <strong>Email:</strong> {booking.customer.email}
            </p>

            <p>
              <strong>Phone:</strong> {booking.customer.phone}
            </p>

            <p>
              <strong>Seats:</strong> {booking.seats.join(", ")}
            </p>

            <p>
              <strong>Total:</strong> {booking.totalPrice} сом
            </p>

            <p>
              <strong>Date:</strong> {booking.bookingDate}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyBookingsPage;
