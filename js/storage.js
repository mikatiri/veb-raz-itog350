if (!localStorage.getItem("users")) {
    localStorage.setItem(
        "users",
        JSON.stringify(defaultUsers)
    );
}

function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

function setCurrentUser(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}