import { useNavigate, useLocation } from "react-router-dom"
import texture from "../assets/texture.jpg"
import { useState } from "react"

export default function Login() {
    const navigate = useNavigate()
    const location = useLocation()
    const redirectTo = location.state?.from || "/hotels"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        localStorage.setItem("isLoggedIn", "true")
        navigate(redirectTo)
    }

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
                padding: "120px"
            }}
        >
            <h1 style={{ fontSize: "56px", fontFamily: "serif", marginBottom: "48px" }}>
                Login
            </h1>

            <div style={{ maxWidth: "420px" }}>
                <div style={{ marginBottom: "32px" }}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "14px",
                            background: "transparent",
                            border: "1px solid #e6c88f",
                            color: "#f5efe6"
                        }}
                    />
                </div>

                <div style={{ marginBottom: "48px" }}>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "14px",
                            background: "transparent",
                            border: "1px solid #e6c88f",
                            color: "#f5efe6"
                        }}
                    />
                </div>

                <button
                    onClick={handleLogin}
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
                    LOGIN
                </button>
            </div>
        </div>
    )
}
