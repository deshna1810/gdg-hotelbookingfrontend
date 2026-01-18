import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import hotels from "../data/hotels.json"
import texture from "../assets/texture.jpg"
import { toggleWishlist } from "../utils/wishlist"

export default function Wishlist() {
    const navigate = useNavigate()
    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        setWishlist(JSON.parse(localStorage.getItem("wishlist")) || [])
    }, [])

    const saved = hotels.filter(h => wishlist.includes(h.id))

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundImage: `
          linear-gradient(rgba(18,12,8,0.9), rgba(18,12,8,0.95)),
          url(${texture})
        `,
                backgroundSize: "220% 220%",
                color: "#f5efe6",
                padding: "80px"
            }}
        >
            <h1 style={{ fontFamily: "serif", fontSize: "56px", marginBottom: "48px" }}>
                Wishlist
            </h1>

            {saved.length === 0 && <p>No saved hotels yet.</p>}

            {saved.map(hotel => (
                <div
                    key={hotel.id}
                    onClick={() => navigate(`/hotels/${hotel.id}`)}
                    style={{
                        position: "relative",
                        cursor: "pointer",
                        border: "1px solid rgba(230,200,143,0.6)",
                        padding: "24px",
                        marginBottom: "32px"
                    }}
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            setWishlist(toggleWishlist(hotel.id))
                        }}
                        style={{
                            position: "absolute",
                            top: "16px",
                            right: "16px",
                            border: "none",
                            background: "transparent",
                            fontSize: "22px",
                            color: "#e6c88f"
                        }}
                    >
                        ♥
                    </button>

                    <h2 style={{ fontFamily: "serif", fontSize: "32px" }}>
                        {hotel.name}
                    </h2>
                    <p style={{ color: "#d8c4a0" }}>{hotel.city}</p>
                </div>
            ))}
        </div>
    )
}
