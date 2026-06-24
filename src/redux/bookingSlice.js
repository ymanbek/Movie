import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    selectedSeats: [],
    totalPrice: 0,
  },
  reducers: {
    setBooking: (state, action) => {
      state.selectedSeats = action.payload.selectedSeats;
      state.totalPrice = action.payload.totalPrice;
    },
    clearBooking: (state) => {
      state.selectedSeats = [];
      state.totalPrice = 0;
    },
  },
});

export const { setBooking, clearBooking } = bookingSlice.actions;
export default bookingSlice.reducer;