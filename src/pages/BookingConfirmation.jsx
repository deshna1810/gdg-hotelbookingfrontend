import texture from "../assets/texture.jpg"
import { useNavigate } from "react-router-dom"

export default function BookingConfirmation() {
    const navigate = useNavigate()

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
                padding: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}
        >
            <h1
                style={{
                    fontFamily: "serif",
                    fontSize: "56px",
                    marginBottom: "24px"
                }}
            >
                Booking Confirmed
            </h1>

            <p
                style={{
                    maxWidth: "520px",
                    color: "#d8c4a0",
                    lineHeight: "1.7",
                    marginBottom: "64px"
                }}
            >
                Your stay has been successfully booked.
                A confirmation email has been sent with all the details.
                We hope you enjoy a calm and comfortable stay.
            </p>

            <button
                onClick={() => navigate("/hotels")}
                style={{
                    padding: "18px 36px",
                    border: "1px solid #e6c88f",
                    background: "transparent",
                    color: "#e6c88f",
                    fontSize: "12px",
                    letterSpacing: "0.3em",
                    cursor: "pointer",
                    width: "fit-content"
                }}
            >
                BACK TO HOTELS
            </button>
        </div>
    )
}
