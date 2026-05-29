//добавление товара в избранное
function addToFavorites(productId) {
    const user = getCurrentUser();

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    if (!user.favorites) {
        user.favorites = [];
    }

    const existing = user.favorites.find(
        item => item.id === productId
    );

    if (!existing) {
        user.favorites.push({
            id: productId,
            addedAt: Date.now()
        });
        updateCurrentUser(user);
        renderFavorites();
    }
}

//удаление товара из избранного
function removeFromFavorites(productId) {
    const user = getCurrentUser();

    user.favorites = user.favorites.filter(
        item => item.id !== productId
    );

    updateCurrentUser(user);
    renderFavorites();
}

//рендер избранного
function renderFavorites() {
    const favoritesItems = document.getElementById("favoritesItems");

    if (!favoritesItems) return;

    const user = getCurrentUser();

    if (!user || !user.favorites.length) {
        favoritesItems.innerHTML = `
            <p class="empty-text">Избранное пусто</p>
        `;

        return;
    }

    const favoriteProducts = user.favorites.map(fav => {
        const product = products.find(p => p.id === fav.id);
        return product;
    }).filter(p => p);

    favoritesItems.innerHTML = favoriteProducts.map(product => {
        const hasDiscount = product.oldPrice && product.oldPrice > product.price;
        const discountPercent = hasDiscount ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
        
        return `
        
        <div class="shop-card">
            <img src="${product.image}" alt="${product.title}" onclick="openProductModal(${product.id})">

            <div class="shop-info">
                <h3>${product.title}</h3>

                <p>${product.category}</p>

                <div class="product-prices-inline">
                    ${hasDiscount ? `<p class="product-old-price">${product.oldPrice.toLocaleString()} ₽</p>` : ''}
                    <p class="product-price">${product.price.toLocaleString()} ₽</p>
                    ${hasDiscount ? `<span class="product-discount-badge">-${discountPercent}%</span>` : ''}
                </div>

                <div class="shop-actions">
                    <button onclick="addToCart(${product.id})" class="btn-cart">В корзину</button>

                    <button onclick="removeFromFavorites(${product.id})" class="btn-delete">Удалить</button>
                </div>
            </div>
        </div>
    `}).join("");
}

renderFavorites();