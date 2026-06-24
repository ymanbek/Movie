import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieDetalisPage from "../pages/MovieDetalisPage";
import MyBookingsPage from "../pages/MyBookingsPage";
import BookingPage from "../pages/BookingPage";
import CheckoutPage from "../pages/CheckoutPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieDetalisPage />} />
      <Route path="/booking/:id" element={<BookingPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/my-bookings" element={<MyBookingsPage />} />
    </Routes>
  );
}
