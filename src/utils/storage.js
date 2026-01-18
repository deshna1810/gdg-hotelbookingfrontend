export const getFavourites = () => {
    return JSON.parse(localStorage.getItem("favourites")) || []
}

export const toggleFavourite = (hotel) => {
    const favs = getFavourites()
    const exists = favs.find((h) => h.id === hotel.id)

    const updated = exists
        ? favs.filter((h) => h.id !== hotel.id)
        : [...favs, hotel]

    localStorage.setItem("favourites", JSON.stringify(updated))
}
