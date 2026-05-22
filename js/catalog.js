const catalogProducts = document.getElementById("catalogProducts");

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

const sortSelect = document.getElementById("sortSelect");

function renderProducts(items) {

    catalogProducts.innerHTML = items.map(product => `
    
        <div class="product-card">

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

                <button>
                    В корзину
                </button>

            </div>

        </div>
    
    `).join("");
}

function filterProducts() {

    let filtered = [...products];

    const searchValue = searchInput.value.toLowerCase();

    const categoryValue = categoryFilter.value;

    const sortValue = sortSelect.value;

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

searchInput.addEventListener("input", filterProducts);

categoryFilter.addEventListener("change", filterProducts);

sortSelect.addEventListener("change", filterProducts);

renderProducts(products);