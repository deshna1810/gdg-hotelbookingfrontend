import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import hotels from "../data/hotels.json"
import texture from "../assets/texture.jpg"
import { toggleWishlist } from "../utils/wishlist"
import { getRecentlyViewed } from "../utils/recentlyViewed"

export default function Hotels() {
    const navigate = useNavigate()
    const [wishlist, setWishlist] = useState([])
    const [recent, setRecent] = useState([])

    useEffect(() => {
        setWishlist(JSON.parse(localStorage.getItem("wishlist")) || [])

        const ids = getRecentlyViewed()
        setRecent(hotels.filter(h => ids.includes(h.id)))
    }, [])

    const handleWishlist = (e, id) => {
        e.stopPropagation()
        const updated = toggleWishlist(id)
        setWishlist(updated)
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundImage: `
          linear-gradient(rgba(18,12,8,0.85), rgba(18,12,8,0.95)),
          url(${texture})
        `,
                backgroundSize: "240% 240%",
                color: "#f5efe6",
                paddingBottom: "120px"
            }}
        >
            <div
                style={{
                    padding: "64px 96px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <h1 style={{ fontFamily: "serif", fontSize: "56px" }}>
                    Explore Stays
                </h1>

                <span
                    onClick={() => navigate("/wishlist")}
                    style={{
                        fontSize: "11px",
                        letterSpacing: "0.35em",
                        color: "#e6c88f",
                        cursor: "pointer"
                    }}
                >
                    WISHLIST
                </span>
            </div>

            {recent.length > 0 && (
                <div style={{ padding: "0 96px 96px" }}>
                    <h2 style={{ fontFamily: "serif", fontSize: "32px", marginBottom: "32px" }}>
                        Recently Viewed
                    </h2>

                    <div style={{ display: "flex", gap: "32px" }}>
                        {recent.map(h => (
                            <div
                                key={h.id}
                                onClick={() => navigate(`/hotels/${h.id}`)}
                                style={{
                                    cursor: "pointer",
                                    width: "220px",
                                    border: "1px solid rgba(230,200,143,0.6)",
                                    padding: "16px"
                                }}
                            >
                                <img
                                    src={h.image}
                                    loading="lazy"
                                    style={{ width: "100%", height: "120px", objectFit: "cover" }}
                                />
                                <div style={{ fontFamily: "serif", marginTop: "12px" }}>
                                    {h.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div style={{ padding: "0 96px", display: "flex", flexDirection: "column", gap: "80px" }}>
                {hotels.map(hotel => (
                    <div
                        key={hotel.id}
                        onClick={() => navigate(`/hotels/${hotel.id}`)}
                        style={{
                            position: "relative",
                            cursor: "pointer",
                            border: "1px solid rgba(230,200,143,0.6)",
                            padding: "24px"
                        }}
                    >
                        <button
                            onClick={(e) => handleWishlist(e, hotel.id)}
                            style={{
                                position: "absolute",
                                top: "16px",
                                right: "16px",
                                border: "none",
                                background: "transparent",
                                fontSize: "22px",
                                cursor: "pointer",
                                color: wishlist.includes(hotel.id) ? "#e6c88f" : "#777"
                            }}
                        >
                            ♥
                        </button>

                        <div style={{ display: "flex", gap: "48px" }}>
                            <img
                                src={hotel.image}
                                loading="lazy"
                                style={{ width: "260px", height: "170px", objectFit: "cover" }}
                            />

                            <div style={{ flex: 1 }}>
                                <h2 style={{ fontFamily: "serif", fontSize: "32px" }}>
                                    {hotel.name}
                                </h2>
                                <p style={{ color: "#e6c88f", letterSpacing: "0.35em", fontSize: "11px" }}>
                                    {hotel.city.toUpperCase()}
                                </p>
                            </div>

                            <div style={{ textAlign: "right" }}>
                                <div style={{ fontFamily: "serif", fontSize: "30px" }}>
                                    ₹{hotel.pricePerNight}
                                </div>
                                <div style={{ fontSize: "12px", color: "#d8c4a0" }}>
                                    per night
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
