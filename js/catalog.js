//тута логика страницы каталога
const catalogProducts = document.getElementById("catalogProducts");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sortSelect");
const params = new URLSearchParams(window.location.search);
const categoryFromUrl = params.get("category");

if(categoryFromUrl && categoryFilter){
    categoryFilter.value = categoryFromUrl;
}

function renderProducts(items) { //как выглядят товары на странице
    catalogProducts.innerHTML = items.map(product => {
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

function filterProducts() { //фильтрация
    let filtered = [...products];

    const searchValue = searchInput ? searchInput.value.toLowerCase() : ""; //поиск по названию
    const categoryValue = categoryFilter ? categoryFilter.value : ""; //выбор категории
    const sortValue = sortSelect ? sortSelect.value : ""; //выбор сортировки

    if (searchValue) {
        filtered = filtered.filter(product =>
            product.title.toLowerCase().includes(searchValue)
        );
    }

    if (categoryValue) {
        filtered = filtered.filter(product =>
            product.category === categoryValue
        );
    }

    if (sortValue === "priceAsc") {
        filtered.sort((a, b) => a.price - b.price);
    }

    if (sortValue === "priceDesc") {
        filtered.sort((a, b) => b.price - a.price);
    }

    if (sortValue === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    renderProducts(filtered);
}

//если есть фильтры, добавляем слушатели событий
if (categoryFilter) {
    categoryFilter.addEventListener("change", filterProducts);
}

if (sortSelect) {
    sortSelect.addEventListener("change", filterProducts);
}

//если есть searchInput и categoryFilter, добавляем слушатель событий
if (searchInput && categoryFilter) {
    searchInput.addEventListener("input", filterProducts);
}

//если нет searchInput или он пустой, показываем все товары
if (!searchInput || searchInput.value === "") {
    filterProducts();
}