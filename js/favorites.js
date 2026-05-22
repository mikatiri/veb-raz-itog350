function addToFavorites(productId) {

    const user = getCurrentUser();

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    if (!user.favorites) {
        user.favorites = [];
    }

    if (!user.favorites.includes(productId)) {
        user.favorites.push(productId);
    }

    updateCurrentUser(user);
}