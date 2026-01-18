import { useState } from "react"
import { toggleFavourite, getFavourites } from "../utils/storage"

export default function HotelCard({ hotel }) {
    const [favourited, setFavourited] = useState(
        getFavourites().some((h) => h.id === hotel.id)
    )

    const handleFavourite = (e) => {
        e.stopPropagation()
        toggleFavourite(hotel)
        setFavourited(!favourited)
    }

    return (
        <div className="bg-black/20 border border-white/10 p-4 text-[#f5efe6]">
            <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-56 object-cover mb-4"
            />

            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-serif text-xl">{hotel.name}</h3>
                    <p className="text-sm text-[#c2a27d]">{hotel.city}</p>
                </div>

                <button onClick={handleFavourite} className="text-xl">
                    {favourited ? "❤️" : "🤍"}
                </button>
            </div>

            <div className="flex justify-between mt-4 text-sm">
                <span>₹{hotel.pricePerNight} / night</span>
                <span>⭐ {hotel.rating}</span>
            </div>
        </div>
    )
}
