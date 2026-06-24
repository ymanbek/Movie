import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { clearBooking } from "../redux/bookingSlice";
import { useState } from "react";

function CheckoutPage() {
  const dispatch = useDispatch();

  const [success, setSuccess] = useState(false);

  const { selectedSeats, totalPrice } = useSelector((state) => state.booking);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const booking = {
      id: Date.now(),
      customer: data,
      seats: selectedSeats,
      totalPrice,
      bookingDate: new Date().toLocaleString(),
    };

    const oldBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem("bookings", JSON.stringify([...oldBookings, booking]));

    dispatch(clearBooking());

    setSuccess(true);
  };

  if (success) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>✅ Booking Successful</h1>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>

      <p>
        <strong>Seats:</strong> {selectedSeats.join(", ")}
      </p>

      <p>
        <strong>Total:</strong> {totalPrice} сом
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            placeholder="First Name"
            {...register("firstName", {
              required: "First name is required",
            })}
          />

          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <br />

        <div>
          <input
            placeholder="Last Name"
            {...register("lastName", {
              required: "Last name is required",
            })}
          />

          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <br />

        <div>
          <input
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email",
              },
            })}
          />

          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <br />

        <div>
          <input
            placeholder="Phone"
            {...register("phone", {
              required: "Phone is required",
            })}
          />

          {errors.phone && <p>{errors.phone.message}</p>}
        </div>

        <br />

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
