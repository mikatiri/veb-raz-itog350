const navProfile = document.getElementById("navProfile");

const currentUser = getCurrentUser();

if (navProfile) {

    if (currentUser) {

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

        navProfile.innerHTML = `
        
            <a href="login.html">
                Вход
            </a>
        
        `;
    }
}