import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Hotels from "./pages/Hotels"
import HotelDetails from "./pages/HotelDetails"
import Wishlist from "./pages/Wishlist"
import Booking from "./pages/Booking"
import BookingConfirmation from "./pages/BookingConfirmation"
import Login from "./pages/Login"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/hotels/:id" element={<HotelDetails />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/booking/:id" element={<Booking />} />
      <Route path="/confirmation" element={<BookingConfirmation />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
