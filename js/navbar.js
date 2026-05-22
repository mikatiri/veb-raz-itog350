//это верхняя менюшечка-плюшечка
const navProfile = document.getElementById("navProfile");

const currentUser = getCurrentUser();

if (navProfile) {

    if (currentUser) { //если user залогинен будет кнопочка его аккаунта и не будет входа

        navProfile.innerHTML = `
        
            <a href="profile.html" class="profile-link">

                <div class="avatar">
                    ${currentUser.name.charAt(0).toUpperCase()}
                </div>

                <span>
                    ${currentUser.name}
                </span>

            </a>
        
        `;

    } else {
        //если user не залогинен будет кнопочка для входа и не будет профиля
        navProfile.innerHTML = ` 
        
            <a href="login.html">
                Вход
            </a>
        
        `;
    }
}