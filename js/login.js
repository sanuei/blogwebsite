// ��?��?�߿�
const DEFAULT_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

// ��?ɽ?���?��
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // ??��?�߿�
    if (username === DEFAULT_CREDENTIALS.username && 
        password === DEFAULT_CREDENTIALS.password) {
        // ��?����
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'admin/dashboard.html'; // ���������������
    } else {
        // ��?��?
        alert('��?̾��̩???��');
    }
});

// ??��?��?
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn && window.location.href.includes('login.html')) {
        window.location.href = 'admin/dashboard.html';
    }
}

// ?�̲�????��?��?
checkLoginStatus(); 