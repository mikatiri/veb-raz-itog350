const modalOverlay = document.getElementById("modalOverlay");

const productModal = document.getElementById("productModal");

function openProductModal(productId) {

    const product = products.find(p => p.id === productId);
    const hasDiscount = product.oldPrice && product.oldPrice > product.price;
    const discountPercent = hasDiscount ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;

    productModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-image">
                <img src="${product.image}" alt="${product.title}">
                ${hasDiscount ? `<span class="product-discount">-${discountPercent}%</span>` : ''}
            </div>
            
            <div class="modal-info">
                <h2>${product.title}</h2>
                <p class="product-category">${product.category}</p>
                
                <div class="modal-prices">
                    ${hasDiscount ? `<p class="product-old-price">${product.oldPrice.toLocaleString()} ₽</p>` : ''}
                    <p class="product-price">${product.price.toLocaleString()} ₽</p>
                    ${hasDiscount ? `<p class="product-discount-badge">-${discountPercent}%</p>` : ''}
                </div>
                
                <p class="product-description">${product.description}</p>
                
                ${product.specs && Object.keys(product.specs).length > 0 ? `
                    <div class="specs">
                        <h3>Характеристики</h3>
                        ${Object.entries(product.specs)
                            .map(([key, value]) => `
                                <p><strong>${key}:</strong> ${value}</p>
                            `)
                            .join("")
                        }
                    </div>
                ` : ''}
                
                <div class="modal-actions">
                    <button onclick="addToCart(${product.id})">В корзину</button>
                    <button onclick="addToFavorites(${product.id})">В избранное</button>
                </div>
            </div>
        </div>
    `;

    modalOverlay.classList.add("active");
}

modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
    }
});