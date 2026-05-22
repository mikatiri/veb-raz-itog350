const modalOverlay = document.getElementById("modalOverlay");

const productModal = document.getElementById("productModal");

function openProductModal(productId) {

    const product = products.find(p => p.id === productId);

    productModal.innerHTML = `

        <img src="${product.image}">

        <h2>
            ${product.title}
        </h2>

        <p class="product-category">
            ${product.category}
        </p>

        <p>
            ${product.description}
        </p>

        <br>

        <p class="product-price">
            ${product.price.toLocaleString()} ₽
        </p>

        ${
            product.oldPrice
            ?
            `<p class="old-price">
                ${product.oldPrice.toLocaleString()} ₽
            </p>`

            :

            ""
        }

        ${
            product.discount
            ?
            `<p class="discount">
                -${product.discount}%
            </p>`

            :

            ""
        }

        <div class="specs">

            ${Object.entries(product.specs)
                .map(([key, value]) => `
                    <p>
                        <strong>${key}:</strong>
                        ${value}
                    </p>
                `)
                .join("")
            }

        </div>

        <div class="modal-actions">

            <button onclick="addToCart(${product.id})">
                В корзину
            </button>

            <button onclick="addToFavorites(${product.id})">
                В избранное
            </button>

        </div>

    `;

    modalOverlay.classList.add("active");
}

modalOverlay.addEventListener("click", (e) => {

    if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
    }

});