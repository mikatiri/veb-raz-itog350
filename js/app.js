//это то как выглядет вкладка популярных товаров на главном экране
const popularProducts = document.getElementById("popularProducts");

if (popularProducts) {
    popularProducts.innerHTML = products.map(product => `
    
        <div class="product-card" onclick="openProductModal(${product.id})">
            <img src="${product.image}" alt="${product.title}">

            <div class="product-content">
                <h3 class="product-title">
                    ${product.title}
                </h3>

                <p class="product-category">
                    ${product.category}
                </p>

                <p class="product-price">
                    ${product.price.toLocaleString()} ₽
                </p>

                <button onclick="event.stopPropagation(); addToCart(${product.id})">
                    В корзину
                </button>

                <button onclick="event.stopPropagation(); addToFavorites(${product.id})">
                    В Израбнное
                </button>
            </div>
        </div>
    `).join("");
}