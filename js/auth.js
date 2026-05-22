//тута формы регистрации и входа
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const error = document.getElementById("error");
        const success = document.getElementById("success");

        let users = getUsers();

        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            error.textContent = "Пользователь уже существует";
            success.textContent = "";
            return;
        }

        const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            bonuses: 0,
            favorites: [],
            orders: [],
            reviews: []
        };

        users.push(newUser);

        saveUsers(users);

        success.textContent = "Аккаунт создан";
        error.textContent = "";

        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
    });
}

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const error = document.getElementById("error");

        const users = getUsers();

        const user = users.find(user =>
            user.email === email &&
            user.password === password
        );

        if (!user) {
            error.textContent = "Неверный логин или пароль";
            return;
        }

        setCurrentUser(user);

        window.location.href = "profile.html";
    });
}