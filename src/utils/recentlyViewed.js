export const getRecentlyViewed = () => {
    return JSON.parse(localStorage.getItem("recentlyViewed")) || []
}

export const addRecentlyViewed = (hotelId) => {
    const current = getRecentlyViewed()
    const updated = [
        hotelId,
        ...current.filter(id => id !== hotelId)
    ].slice(0, 5)

    localStorage.setItem("recentlyViewed", JSON.stringify(updated))
    return updated
}
