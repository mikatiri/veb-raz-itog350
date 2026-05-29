//добавление товара в корзину
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
    renderCart();
}

//удаление товара из корзины
function removeFromCart(productId) {
    const user = getCurrentUser();
    user.cart = user.cart.filter(
        item => item.id !== productId
    );

    updateCurrentUser(user);
    renderCart();
}

//изменение количества
function changeQuantity(productId, value) {

    const user = getCurrentUser();
    const item = user.cart.find(
        item => item.id === productId
    );

    if (!item) return;

    item.quantity += value;

    if (item.quantity <= 0) {
        user.cart = user.cart.filter(
            item => item.id !== productId
        );
    }

    updateCurrentUser(user);
    renderCart();
}

//рендер корзины
function renderCart() {

    const cartItems = document.getElementById("cartItems");

    if (!cartItems) return;

    const user = getCurrentUser();

    if (!user || !user.cart.length) {
        cartItems.innerHTML = `
            <p class="empty-text">Корзина пуста</p>
        `;
        return;
    }

    let totalWithoutDiscount = 0;

    let total = 0;

    cartItems.innerHTML = user.cart.map(item => {

        const product = products.find(p => p.id === item.id);

        const oldPrice = product.oldPrice || product.price;

        totalWithoutDiscount += oldPrice * item.quantity;

        total += product.price * item.quantity;

        return `
        
            <div class="shop-card">
                <img
                    src="${product.image}"
                    alt="${product.title}"
                    onclick="openProductModal(${product.id})"
                >

                <div class="shop-info">
                    <h3>${product.title}</h3>

                    <p>${product.category}</p>

                    <p class="product-price">${product.price.toLocaleString()} ₽</p>

                    ${
                        product.oldPrice
                        ?
                        `
                            <p class="old-price">${product.oldPrice.toLocaleString()} ₽</p>
                        `
                        :
                        ""
                    }

                    <div class="shop-actions">
                        <button onclick="changeQuantity(${product.id}, -1)">-</button>

                        <span>${item.quantity}</span>

                        <button onclick="changeQuantity(${product.id}, 1)">+</button>

                        <button onclick="removeFromCart(${product.id})">Удалить</button>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    const withoutDiscount =
    document.getElementById("cartWithoutDiscount");

const discountElement =
    document.getElementById("cartDiscount");

const totalElement =
    document.getElementById("cartTotal");

if (withoutDiscount) {

    withoutDiscount.textContent =
        `Без скидки: ${totalWithoutDiscount.toLocaleString()} ₽`;

}

if (discountElement) {

    discountElement.textContent =
        `Скидка: ${discount.toLocaleString()} ₽`;

}

if (totalElement) {

    totalElement.textContent =
        `Итого: ${total.toLocaleString()} ₽`;

}
}

//оформление заказа
const checkoutBtn = document.getElementById("checkoutBtn");

if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
        const user = getCurrentUser();

        if (!user.cart.length) return;

        user.orders.push({
            id: Date.now(),
            items: user.cart,
            date: new Date().toLocaleDateString()
        });

        user.cart = [];

        updateCurrentUser(user);
        renderCart();
        alert("Заказ оформлен");
    });
}

renderCart();