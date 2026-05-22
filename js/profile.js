//тута профиль юзерочка
const profileInfo = document.getElementById("profileInfo");

const user = getCurrentUser();

if (!user) { //если не залогиинен перейдешь на страницу входа, хз зачем тк в профиль все равно не войдешь без входа в акк но вдруг!!!!! 
    window.location.href = "login.html";
}

profileInfo.innerHTML = `

    <div class="profile-card">

        <h3>Имя</h3>

        <input
            type="text"
            id="editName"
            value="${user.name}"
        >

        <button id="saveNameBtn">
            Сохранить имя
        </button>

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

const saveNameBtn = document.getElementById("saveNameBtn"); //смена имени

saveNameBtn.addEventListener("click", () => {

    const newName = document
        .getElementById("editName")
        .value
        .trim();

    if (!newName) return;

    let users = getUsers();

    const updatedUsers = users.map(item => {

        if (item.id === user.id) {
            item.name = newName;
        }

        return item;
    });

    saveUsers(updatedUsers);

    user.name = newName;

    setCurrentUser(user);

    location.reload();
});