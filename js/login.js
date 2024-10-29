// àÔ?ÅÐ?Ñß¿ø
const DEFAULT_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

// ÅÐ?É½?Äó¸ò?Íý
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // ??ÅÐ?Ñß¿ø
    if (username === DEFAULT_CREDENTIALS.username && 
        password === DEFAULT_CREDENTIALS.password) {
        // ÅÐ?À®¸ù
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'admin/dashboard.html'; // ½ÅÄê¸þÅþ´ÉÍý¹¡Âæ
    } else {
        // ÅÐ?¼º?
        alert('ÍÑ?Ì¾°¿Ì©???¡ª');
    }
});

// ??ÅÐ?¾õ?
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn && window.location.href.includes('login.html')) {
        window.location.href = 'admin/dashboard.html';
    }
}

// ?ÌÌ²Ã????ÅÐ?¾õ?
checkLoginStatus(); 