//это то как выглядет вкладка популярных товаров на главном экране
const popularProducts = document.getElementById("popularProducts");
const discountProducts = document.getElementById("discountProducts");

if (popularProducts) {
    // Фильтруем только популярные товары
    const popularItems = products.filter(p => p.isPopular);
    
    popularProducts.innerHTML = popularItems.map(product => {
        // Автоматический расчет скидки
        const hasDiscount = product.oldPrice && product.oldPrice > product.price;
        const discountPercent = hasDiscount ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
        
        return `
    
        <div class="product-card" onclick="openProductModal(${product.id})">
            <img src="${product.image}" alt="${product.title}">
            <div class="product-content">
                <h3 class="product-title">
                    ${product.title}
                </h3>

                <p class="product-category">
                    ${product.category}
                </p>

                <div class="product-prices-inline">
                    ${hasDiscount ? `<p class="product-old-price">${product.oldPrice.toLocaleString()} ₽</p>` : ''}
                    <p class="product-price">${product.price.toLocaleString()} ₽</p>
                    ${hasDiscount ? `<span class="product-discount-badge">-${discountPercent}%</span>` : ''}
                </div>

                <button onclick="event.stopPropagation(); addToCart(${product.id})" class="btn-cart">
                    В корзину
                </button>

                <button onclick="event.stopPropagation(); addToFavorites(${product.id})" class="btn-favorites">
                    В Избранное
                </button>
            </div>
        </div>
    `}).join("");
}

if (discountProducts) {
    // Фильтруем товары со скидкой
    const discountItems = products.filter(p => p.oldPrice && p.oldPrice > p.price);
    
    if (discountItems.length > 0) {
        discountProducts.innerHTML = discountItems.map(product => {
            // Автоматический расчет скидки
            const discountPercent = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
            
            return `
        
            <div class="product-card" onclick="openProductModal(${product.id})">
                <img src="${product.image}" alt="${product.title}">
                <div class="product-content">
                    <h3 class="product-title">
                        ${product.title}
                    </h3>

                    <p class="product-category">
                        ${product.category}
                    </p>

                    <div class="product-prices-inline">
                        <p class="product-old-price">${product.oldPrice.toLocaleString()} ₽</p>
                        <p class="product-price">${product.price.toLocaleString()} ₽</p>
                        <span class="product-discount-badge">-${discountPercent}%</span>
                    </div>

                    <button onclick="event.stopPropagation(); addToCart(${product.id})" class="btn-cart">
                        В корзину
                    </button>

                    <button onclick="event.stopPropagation(); addToFavorites(${product.id})" class="btn-favorites">
                        В Избранное
                    </button>
                </div>
            </div>
        `}).join("");
    } else {
        discountProducts.innerHTML = `
            <p class="empty-text" style="margin: 20px auto;">Нет акционных товаров</p>
        `;
    }
}