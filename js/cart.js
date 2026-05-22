function addToCart(productId) {

    const user = getCurrentUser();

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    if (!user.cart) {
        user.cart = [];
    }

    const existing = user.cart.find(
        item => item.id === productId
    );

    if (existing) {

        existing.quantity++;

    } else {

        user.cart.push({
            id: productId,
            quantity: 1
        });

    }

    updateCurrentUser(user);
}