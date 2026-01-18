export const getWishlist = () => {
    return JSON.parse(localStorage.getItem("wishlist")) || []
}

export const toggleWishlist = (hotelId) => {
    const wishlist = getWishlist()
    const updated = wishlist.includes(hotelId)
        ? wishlist.filter(id => id !== hotelId)
        : [...wishlist, hotelId]

    localStorage.setItem("wishlist", JSON.stringify(updated))
    return updated
}

export const isWishlisted = (hotelId) => {
    const wishlist = getWishlist()
    return wishlist.includes(hotelId)
}
