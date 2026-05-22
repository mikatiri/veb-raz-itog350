const profileInfo = document.getElementById("profileInfo");

const user = getCurrentUser();

if (!user) {
    window.location.href = "login.html";
}

profileInfo.innerHTML = `
    <div class="profile-card">
        <h3>Имя</h3>
        <p>${user.name}</p>
    </div>

    <div class="profile-card">
        <h3>Email</h3>
        <p>${user.email}</p>
    </div>

    <div class="profile-card">
        <h3>Бонусы</h3>
        <p>${user.bonuses}</p>
    </div>

    <div class="profile-card">
        <h3>Избранных товаров</h3>
        <p>${user.favorites.length}</p>
    </div>

    <div class="profile-card">
        <h3>Заказов</h3>
        <p>${user.orders.length}</p>
    </div>
`;