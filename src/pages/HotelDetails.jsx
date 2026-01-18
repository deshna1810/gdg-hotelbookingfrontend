import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import hotels from "../data/hotels.json"
import texture from "../assets/texture.jpg"
import { toggleWishlist, isWishlisted } from "../utils/wishlist"
import { addRecentlyViewed } from "../utils/recentlyViewed"

export default function HotelDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const hotelId = Number(id)
    const hotel = hotels.find(h => h.id === hotelId)
    const [wishlisted, setWishlisted] = useState(
        isWishlisted(hotelId)
    )

    useEffect(() => {
        if (hotel) {
            addRecentlyViewed(hotel.id)
        }
    }, [hotel])

    if (!hotel) {
        return (
            <div style={{ padding: 80, color: "#fff", background: "#111" }}>
                Hotel not found
            </div>
        )
    }

    const roomTypes = [
        { type: "Deluxe Room", price: hotel.pricePerNight },
        { type: "Premium Room", price: hotel.pricePerNight + 1200 },
        { type: "Suite", price: hotel.pricePerNight + 2800 }
    ]

    const reviews = [
        {
            name: "Aarav Mehta",
            rating: 5,
            text: "Calm, elegant, and extremely comfortable."
        },
        {
            name: "Nisha Kapoor",
            rating: 4,
            text: "Beautiful interiors and a very peaceful vibe."
        }
    ]

    const handleReserve = () => {
        if (!localStorage.getItem("isLoggedIn")) {
            navigate("/login", {
                state: { from: `/booking/${hotel.id}` }
            })
        } else {
            navigate(`/booking/${hotel.id}`)
        }
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundImage: `
          linear-gradient(rgba(18,12,8,0.85), rgba(18,12,8,0.95)),
          url(${texture})
        `,
                backgroundRepeat: "repeat",
                backgroundSize: "220% 220%",
                color: "#f5efe6",
                padding: "80px"
            }}
        >
            <div
                style={{
                    border: "1px solid rgba(230,200,143,0.5)",
                    padding: "24px",
                    marginBottom: "64px"
                }}
            >
                <img
                    src={hotel.image}
                    alt={hotel.name}
                    loading="lazy"
                    style={{
                        width: "100%",
                        height: "420px",
                        objectFit: "cover"
                    }}
                />
            </div>

            <h1 style={{ fontFamily: "serif", fontSize: "48px", marginBottom: "12px" }}>
                {hotel.name}
            </h1>

            <p
                style={{
                    fontSize: "12px",
                    letterSpacing: "0.35em",
                    color: "#e6c88f",
                    marginBottom: "24px"
                }}
            >
                {hotel.city.toUpperCase()}
            </p>

            <button
                onClick={() => setWishlisted(toggleWishlist(hotel.id))}
                style={{
                    marginBottom: "48px",
                    border: "1px solid #e6c88f",
                    background: "transparent",
                    color: wishlisted ? "#e6c88f" : "#777",
                    padding: "8px 16px",
                    cursor: "pointer"
                }}
            >
                {wishlisted ? "♥ Saved" : "♡ Save to Wishlist"}
            </button>

            <div
                style={{
                    maxWidth: "720px",
                    color: "#d8c4a0",
                    lineHeight: "1.7",
                    marginBottom: "96px"
                }}
            >
                {hotel.name} is a thoughtfully designed stay offering comfort,
                calm, and understated luxury. Every room is curated for
                relaxation and slow travel.
            </div>

            <div style={{ marginBottom: "96px" }}>
                <h2 style={{ fontFamily: "serif", fontSize: "28px", marginBottom: "32px" }}>
                    Room Types
                </h2>

                {roomTypes.map(room => (
                    <div
                        key={room.type}
                        style={{
                            borderTop: "1px solid rgba(230,200,143,0.4)",
                            padding: "24px 0",
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >
                        <span>{room.type}</span>
                        <span style={{ fontFamily: "serif" }}>₹{room.price}</span>
                    </div>
                ))}
            </div>

            <div style={{ marginBottom: "96px" }}>
                <h2 style={{ fontFamily: "serif", fontSize: "28px", marginBottom: "32px" }}>
                    Amenities
                </h2>

                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                    {hotel.amenities.map(a => (
                        <span
                            key={a}
                            style={{
                                padding: "10px 18px",
                                border: "1px solid rgba(230,200,143,0.6)",
                                fontSize: "12px",
                                letterSpacing: "0.1em",
                                color: "#e6c88f"
                            }}
                        >
                            {a.toUpperCase()}
                        </span>
                    ))}
                </div>
            </div>

            <div style={{ marginBottom: "96px" }}>
                <h2 style={{ fontFamily: "serif", fontSize: "28px", marginBottom: "32px" }}>
                    Guest Reviews
                </h2>

                {reviews.map((r, i) => (
                    <div
                        key={i}
                        style={{
                            borderLeft: "2px solid #e6c88f",
                            paddingLeft: "24px",
                            marginBottom: "32px"
                        }}
                    >
                        <div style={{ color: "#e6c88f", marginBottom: "8px" }}>
                            {"★".repeat(r.rating)}
                        </div>
                        <div>{r.text}</div>
                        <div style={{ fontSize: "12px", color: "#d8c4a0" }}>
                            — {r.name}
                        </div>
                    </div>
                ))}
            </div>

            <div
                style={{
                    borderTop: "1px solid rgba(230,200,143,0.4)",
                    paddingTop: "40px",
                    maxWidth: "720px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <div style={{ fontFamily: "serif", fontSize: "36px" }}>
                    ₹{hotel.pricePerNight}
                    <span style={{ fontSize: "14px", color: "#d8c4a0" }}> per night</span>
                </div>

                <button
                    onClick={handleReserve}
                    style={{
                        padding: "18px 36px",
                        border: "1px solid #e6c88f",
                        background: "transparent",
                        color: "#e6c88f",
                        fontSize: "12px",
                        letterSpacing: "0.3em",
                        cursor: "pointer"
                    }}
                >
                    RESERVE
                </button>
            </div>
        </div>
    )
}
