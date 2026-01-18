import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import hotels from "../data/hotels.json"
import texture from "../assets/texture.jpg"

export default function Booking() {
    const { id } = useParams()
    const navigate = useNavigate()
    const hotel = hotels.find(h => h.id === Number(id))

    useEffect(() => {
        if (!localStorage.getItem("isLoggedIn")) {
            navigate("/login", {
                state: { from: `/booking/${id}` }
            })
        }
    }, [navigate, id])

    const roomTypes = [
        { type: "Deluxe Room", multiplier: 1 },
        { type: "Premium Room", multiplier: 1.25 },
        { type: "Suite", multiplier: 1.6 }
    ]

    const [roomType, setRoomType] = useState(roomTypes[0])
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [guests, setGuests] = useState(2)

    if (!hotel) {
        return <div style={{ padding: 80, color: "#fff" }}>Not found</div>
    }

    const nights =
        checkIn && checkOut
            ? Math.max(
                (new Date(checkOut) - new Date(checkIn)) /
                (1000 * 60 * 60 * 24),
                1
            )
            : 0

    const baseNightPrice = Math.round(
        hotel.pricePerNight * roomType.multiplier
    )

    const basePrice = nights * baseNightPrice
    const taxes = Math.round(basePrice * 0.12)
    const total = basePrice + taxes

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundImage: `
          linear-gradient(rgba(18,12,8,0.9), rgba(18,12,8,0.95)),
          url(${texture})
        `,
                backgroundRepeat: "repeat",
                backgroundSize: "220% 220%",
                color: "#f5efe6",
                padding: "80px"
            }}
        >
            <h1 style={{ fontSize: "48px", fontFamily: "serif", marginBottom: "48px" }}>
                Confirm your stay
            </h1>

            <div style={{ maxWidth: "720px" }}>
                <div style={{ marginBottom: "40px" }}>
                    <div style={{ fontSize: "14px", color: "#e6c88f", marginBottom: "12px" }}>
                        ROOM TYPE
                    </div>
                    <select
                        value={roomType.type}
                        onChange={e =>
                            setRoomType(
                                roomTypes.find(r => r.type === e.target.value)
                            )
                        }
                        style={{
                            width: "100%",
                            padding: "14px",
                            background: "transparent",
                            border: "1px solid #e6c88f",
                            color: "#f5efe6"
                        }}
                    >
                        {roomTypes.map(r => (
                            <option key={r.type} value={r.type} style={{ color: "#000" }}>
                                {r.type}
                            </option>
                        ))}
                    </select>
                </div>

                <div style={{ marginBottom: "40px" }}>
                    <div style={{ fontSize: "14px", color: "#e6c88f", marginBottom: "12px" }}>
                        CHECK IN
                    </div>
                    <input
                        type="date"
                        value={checkIn}
                        onChange={e => setCheckIn(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "14px",
                            background: "transparent",
                            border: "1px solid #e6c88f",
                            color: "#f5efe6"
                        }}
                    />
                </div>

                <div style={{ marginBottom: "40px" }}>
                    <div style={{ fontSize: "14px", color: "#e6c88f", marginBottom: "12px" }}>
                        CHECK OUT
                    </div>
                    <input
                        type="date"
                        value={checkOut}
                        onChange={e => setCheckOut(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "14px",
                            background: "transparent",
                            border: "1px solid #e6c88f",
                            color: "#f5efe6"
                        }}
                    />
                </div>

                <div style={{ marginBottom: "60px" }}>
                    <div style={{ fontSize: "14px", color: "#e6c88f", marginBottom: "12px" }}>
                        GUESTS
                    </div>
                    <input
                        type="number"
                        min="1"
                        value={guests}
                        onChange={e => setGuests(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "14px",
                            background: "transparent",
                            border: "1px solid #e6c88f",
                            color: "#f5efe6"
                        }}
                    />
                </div>

                <div
                    style={{
                        borderTop: "1px solid rgba(230,200,143,0.4)",
                        paddingTop: "40px",
                        marginBottom: "40px"
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                        <span>{roomType.type}</span>
                        <span>₹{baseNightPrice} / night</span>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                        <span>{nights} nights</span>
                        <span>₹{basePrice}</span>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                        <span>Taxes</span>
                        <span>₹{taxes}</span>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: "24px",
                            fontFamily: "serif"
                        }}
                    >
                        <span>Total</span>
                        <span>₹{total}</span>
                    </div>
                </div>

                <button
                    onClick={() => navigate("/confirmation")}
                    style={{
                        width: "100%",
                        padding: "18px",
                        border: "1px solid #e6c88f",
                        background: "transparent",
                        color: "#e6c88f",
                        fontSize: "12px",
                        letterSpacing: "0.3em",
                        cursor: "pointer"
                    }}
                >
                    CONFIRM BOOKING
                </button>
            </div>
        </div>
    )
}
